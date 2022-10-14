function ShowHideNotification() {
    let notification_div = document.getElementById("notification");
    if (notification_div.style.display == "flex")
        notification_div.style.display = "none";
    else
        notification_div.style.display = "flex";
}

function ShowHideSite() {
    let site_div = document.getElementById("site");
    if (site_div.style.display == "flex")
        site_div.style.display = "none";
    else
        site_div.style.display = "flex";
}