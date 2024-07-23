import { useRouter, useSegments } from 'expo-router';
import * as React from 'react';

const AuthContext = React.createContext(null);



export function useAuth(){
    return React.useContext(AuthContext);
}
export function AuthProvider({children}:React.PropsWithChildren){
    const rootSegment = useSegments()[0];
    const router = useRouter()
    const [user, setUser] = React.useState<string | undefined>("");


    React.useEffect(() => {

        if (user === undefined) return;

        if(!user && rootSegment !== "(auth)"){
            router.replace("/(auth)/Login")
        }else if (user && rootSegment !== "(app)"){
            router.replace('/');
        }

    }, [user, rootSegment]); 


    return (
        <AuthContext.Provider
        
        value={{
                user: user,
                signIn: () => {
                    setUser("abed")
                },
                signOut: () => {
                    setUser("")
                }
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}   