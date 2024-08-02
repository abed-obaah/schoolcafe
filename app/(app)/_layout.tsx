import { Stack } from "expo-router";

export default function AppEntry(){
    return(
        <Stack   screenOptions={{
            headerShown:false
          }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ headerShown: false }} />
      </Stack>
    )
}