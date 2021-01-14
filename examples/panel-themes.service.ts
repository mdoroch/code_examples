class PanelThemes {
    public DEFAULT_THEME: string = 'dark';
    public COMMON_THEME: string = 'common:setting:theme';
    public themes: Array<string> = ['brand', 'dark', 'light'];

    private _theme: any = this.initTheme();

    //@ngInject
    constructor(private suiStorage) {}

    get theme() {
        return this._theme;
    }

    set theme(val) {
        this.suiStorage.set(this.COMMON_THEME, val);
        this._theme = val;
    }
    initTheme() {
        this._theme =
            this.suiStorage.get(this.COMMON_THEME) || this.DEFAULT_THEME;
    }
    resetTheme() {
        this._theme = this.DEFAULT_THEME;
    }
}

export { PanelThemes };
