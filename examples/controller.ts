
export default class Controller {
    public text: string;
    public type: string;

    static $inject = ['$sce'];
    constructor(private $sce) {}
    getTrustedText(text = this.text) {
        return this.$sce.trustAsHtml(text);
    }
}
