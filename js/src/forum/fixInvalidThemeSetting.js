/*
    This function is designed to catch invalid theme values
    and handle them before they can break Flarum for users.

    E.g. if a user manually edited their local storage to
    set their theme to an invalid value, this theme would
    detect that, and reset it to 0 (auto).

    I'm sure there are still cases where users can break this
    (maybe faking XHRs to Flarum and setting their user prefs
    to use an invalid value) bt those are extremes which
    wouldn't happen unless someone's being an idiot. If someone
    if being an idiot, they deserve to lose Flarum .

    :)

    ---

    David Wheatley
    GitHub: davwheat || giffgaff: mrjeeves
*/

export default function fixInvalidThemeSetting() {
  
    let wasInvalid = false;
    let t;

    try {
        t = parseInt(localStorage.getItem("davwheat_themer_themetype"));
    } catch (error) {
        console.error("Theme is not a valid integer! (1)");
        localStorage.setItem("davwheat_themer_themetype", 0);
        wasInvalid = true;
    }

    console.log(t);

    if (isNaN(t)) {
        console.error("Theme is not a valid integer! (2)");
        localStorage.setItem("davwheat_themer_themetype", 0);
        wasInvalid = true;
    }

    if (!wasInvalid && (t > 3 || t < 0)) {
        // theme out of bounds
        console.error("Theme is out of bounds (not between 0 and 3)!");
        localStorage.setItem("davwheat_themer_themetype", 0);
        wasInvalid = true;
    }

    // if (wasInvalid) location.reload();
}
