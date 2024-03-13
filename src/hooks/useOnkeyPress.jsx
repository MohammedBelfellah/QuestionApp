import { useEffect } from "react";

export function useOnkeyPress(callback, targetKey) {
    useEffect(() => {
        const keypressHandler = (e) => {
            if (e.key === targetKey) {
                callback();
            }
        }
        window.addEventListener('keydown', keypressHandler)
        return () => {
            window.removeEventListener('keydown', keypressHandler)
        }
    }, [callback, targetKey])
}
