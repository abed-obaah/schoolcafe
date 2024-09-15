import { useRouter, useSegments } from 'expo-router';
import * as React from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/firebaseConfig'; // Ensure this path is correct
import { useToast } from 'react-native-toast-notifications'; // Assuming you are using this toast library

const AuthContext = React.createContext(null);

export function useAuth() {
    return React.useContext(AuthContext);
}

export function AuthProvider({ children }: React.PropsWithChildren) {
    const rootSegment = useSegments()[0];
    const router = useRouter();
    const toast = useToast();
    const [user, setUser] = React.useState<string | undefined>("");


    React.useEffect(() => {
        if (user === undefined) return;

        if (!user && rootSegment !== "(auth)") {
            router.replace("/(auth)/Login");
        } else if (user && rootSegment !== "(app)") {
            router.replace('/');
        }
    }, [user, rootSegment]);

    const signIn = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Signed in with:', user.email);
            // toast.show("Login Successful1", {
            //     type: "success",
            //     placement: "top",
            //     duration: 4000,
            //     offset: 30,
            //     animationType: "slide-in",
            // });
            setUser(user.uid); // Update the user state with the UID or other identifier
            router.replace('/');
        } catch (error) {
            console.error('Error signing in:', error.message);
           
        }
    };

    const registerUser = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                email: user.email,
                createdAt: new Date(),
                // Add any other user details you want to store
            });

            console.log("User registered and data stored in Firestore!");
            router.replace('/(auth)/login');

            setUser(user.uid); // Update the user state with the UID or other identifier
        } catch (err) {
            console.error("Error creating user or storing data in Firestore:", err);
          
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user: user,
                signIn: signIn,
                signOut: () => {
                    setUser("");
                    toast.show("Logged out successfully", {
                        type: "success",
                        placement: "top",
                        duration: 4000,
                        offset: 30,
                        animationType: "slide-in",
                    });
                },
                registerUser: registerUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
