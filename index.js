$(document).ready(() => {
    let width = $(document).width();
    if (width < 900) {
        console.log("here i am");
        $(".navbar").hide();
        $(".hamburger").on("click", () => {
            console.log("hello");
            if ($(".navbar").css("display") == "none") {
                $(".navbar").show("slow");
            } else {
                $(".navbar").hide("slow");
            }
            $(".navbar > ul > li > a").on("click", (event) => {
                $(".navbar").hide("slow");
            });
        });
    }
    if (width > 900) {
        $(".navbar").show();
        console.log("hide");
    }
});
