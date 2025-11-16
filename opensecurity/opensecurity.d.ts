/**
 * The OpenSecurity components
 * @noSelfInFile
 */
declare namespace OpenSecurity {
    /**
     * Reading magnetic cards
     * @noSelf
     */
    interface MagneticCardReader {
        /**
         * Sets the event name returned when you click it with a card, default is magData
         */
        setEventName(eventName: string): void;

        /**
         * Enables/disables automatic lights on the magreader. If true, it will function as it normally does when clicked with a card. If false, you have to call setLightState to change the lights on the magreader. default is true.
         */
        swipeIndicator(enableLights: boolean): void;

        /**
         * Sets the light state of the magreader. Takes in a number from 0 to 7. default is 0
         */
        setLightState(lightState: number): void;
    }

    /**
     * Controlling security doors
     * @noSelf
     */
    interface DoorController {
        toggle(password?: string): void
        isOpen(): boolean
        open(password?: string): void
        close(password?: string): void
        setPassword(oldPassword: string, newPassword: string): void
        removePassword(password: string): void
    }
}