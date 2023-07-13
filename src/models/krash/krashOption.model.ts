export interface KrashOptionModel {
    /**
     * The duration of the displayed graph (in ms)
     */
    graphTimespan: number;
    /**
     * The amount of points displayed on graph
     */
    graphPointAmount: number;
    /**
     * The noise of curves (to make like stock market)
     */
    noise: number;
    /**
     * Should the krash play a sound on start
     */
    shouldKrashPlaySound: boolean;
}
