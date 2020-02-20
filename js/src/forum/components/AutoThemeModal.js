import Modal from "flarum/components/Modal";
import Button from "flarum/components/Button";
import KeyboardNavigatable from "flarum/utils/KeyboardNavigatable";

export default class AutoThemeModal extends Modal {
    isDismissible() {
        return false;
    }

    init() {
        super.init();

        this.selected = [];
        this.filter = m.prop("");
        this.focused = false;

        this.option = true;

        // TODO: Make keyboard accessible
        // this.navigator = new KeyboardNavigatable();
        // this.navigator
        //     .onUp(() => this.setIndex(this.getCurrentNumericIndex() - 1, true))
        //     .onDown(() =>
        //         this.setIndex(this.getCurrentNumericIndex() + 1, true)
        //     )
        //     .onSelect(this.select.bind(this))
        //     .onRemove(() => this.selected.splice(this.selected.length - 1, 1));
    }

    className() {
        return "ggNightModeModal";
    }

    title() {
        return app.translator.trans(
            "fof-nightmode.forum.auto_theme.dialog.title"
        );
    }

    content() {
        return [
            <div className="Modal-body">
                <div className="ggNightModeModal--auto-theme">
                    <p className="ggNightModeModal--paragraph">
                        {app.translator.trans(
                            "fof-nightmode.forum.auto_theme.dialog.message"
                        )}
                    </p>
                    <p className="ggNightModeModal--paragraph">
                        <strong>
                            {app.translator.trans(
                                "fof-nightmode.forum.auto_theme.dialog.prompt"
                            )}
                        </strong>
                    </p>
                </div>

                <div className="Form Form--centered">
                    <div className="Form-group">
                        {Button.component({
                            className: "Button Button--primary",
                            icon: "fas fa-check",
                            children: app.translator.trans(
                                "fof-nightmode.forum.auto_theme.dialog.keep_enabled_btn"
                            ),
                            onclick: e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.onButtonClick("keep");
                            }
                        })}
                    </div>

                    <div className="Form-group">
                        {Button.component({
                            className: "Button Button--primary Button--cancel",
                            icon: "fas fa-times",
                            children: app.translator.trans(
                                "fof-nightmode.forum.auto_theme.dialog.turn_off_btn"
                            ),
                            onclick: e => {
                                e.preventDefault();
                                e.stopPropagation();
                                this.onButtonClick("undo");
                            }
                        })}
                    </div>
                </div>
            </div>,

            <div className="Modal-footer">
                <p className="ggNightModeModal--note">
                    <span className="ggNightModeModal-note--large-screen">
                        {app.translator.trans(
                            "fof-nightmode.forum.auto_theme.dialog.note"
                        )}
                    </span>
                    <span className="ggNightModeModal-note--small-screen">
                        {app.translator.trans(
                            "fof-nightmode.forum.auto_theme.dialog.note_mobile"
                        )}
                    </span>
                </p>
            </div>
        ];
    }

    onsubmit(e) {
        e.preventDefault();
    }

    onButtonClick(e) {
        if (this.props.onsubmit) this.props.onsubmit(e);

        app.modal.close();
        m.redraw.strategy("none");
    }
}
