import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'

const OneTap = (props) => {
    const url = 'https://accounts.google.com/gsi/client'
    const {data: session} = useSession()
    const [isLoading, setIsLoading] = useState(false)
    const [isSignedIn, setIsSignedIn] = useState(false)
    const {nextAuthOpt, googleOpt} = props || {}

    useEffect(() => {
        if(session){
            setIsSignedIn(true)
        }
    }, [session])

    useEffect(() => {
        let script = document.createElement('script')
        script.async = true
        script.src = url
        document.head.appendChild(script)
        if(!isLoading && !isSignedIn){
            const {google} = window
            if(google){
                google.accounts.id.initialize({
                    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                    callback: async (response) => {
                        setIsLoading(true)
                        
                        await signIn( {
                            credential: response.credential,
                            ...nextAuthOpt
                        })
                        setIsLoading(false)
                    },
                    ...googleOpt
                })

             
                if(googleOpt.isOneTap){
                    google.accounts.id.prompt((notification) => {
                        if(notification.isNotDisplayed()){
                            console.log('getNotDisplayedReaseon: ', notification.getNotDisplayedReason())
                        } else if(notification.isSkippedMoment()){
                            console.log('isSkippedMoment: ', notification.getSkippedReason())
                        } else if(notification.isDismissedMoment()){
                            console.log('isDismissedMoment: ', notification.getDismissedReason())
                        }
                    })
                }

            }
        }

    }, [googleOpt, isLoading, isSignedIn, nextAuthOpt])

    return { isLoading, isSignedIn }

}

export default OneTap;
