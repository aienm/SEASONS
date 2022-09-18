
// NEXTbtn押したらTopページ非表示
$(function () {
    $(".Top_outline").click(function () {
        $(".siteTop_info").toggleClass("bg_none");
    });
});

// NEXTbtn押したらConseputページ表示
$(function () {
    $(".Top_outline").click(function () {
        $(".siteConsept").show();
        $(".siteTop").css('background-color', 'rgba(0, 0, 0, 0.8)');
    });
});

// STARTbtn押したらConseptページ非表示
$(function () {
    $(".Consept_outline").click(function () {
        $(".siteConsept_info").toggleClass("bg_none");
    });
});

// Conseptページbtn押したらNameページ表示
$(function () {
    $(".Consept_outline").click(function () {
        $(".siteName").show();
        $(".siteTop").css('background-color', '');
        $(".siteTop").css('background-color', 'rgba(255, 255, 255, 0.3)');
    });
});

var NameBtn_flag = false;
//入力途中で→btn反応
$("#Nametext").on("input", function () {

    var input = $(this).val(); //input に入力された文字を取得
    if (input) {
        $(".Name_arrow").css('border-top', '1.5px solid rgb(255, 255, 255)');
        $(".Name_arrow").css('border-right', '1.5px solid rgb(255, 255, 255)');
        $(".Name_arrow").css('border-image-slice', '1');
        $(".Name_btnCircle").show();
    } else {
        NameBtn_flag = false;
    }
});

//入力完了で→btn反応
$(function () {
    //バリデーション
    $("input.Name_textbox").on("blur", function () {
        let error;
        let value = $(this).val();
        if (value == "" || !value.match(/[^\s\t]/)) {
            error = true;
        }
        if (!error) {
            $(".Name_arrow").css('border-top', '1.5px solid rgb(255, 255, 255)');
            $(".Name_arrow").css('border-right', '1.5px solid rgb(255, 255, 255)');
            $(".Name_arrow").css('border-image-slice', '1');
            $(".Name_btnCircle").show();

            $(".Name_btn").click(function () {
                //Q1表示
                $(".siteQ1").show();
                $(".sitelogo").show();
            });
            NameBtn_flag = true;
        } else {
        }
    });
});

//NextBtn押したらNameページ非表示
$(function () {
    $(".Name_btn").on("click", function () {
        if (NameBtn_flag) {
            $(".siteName_info").toggleClass("bg_none");
        }
    });
});


//選択表示
var selectA_flag = false;
var selectB_flag = false;
var selectC_flag = false;
var selectD_flag = false;
var nextbtn_flag = false;
var selectnum 



$(".Question_boxA").click(function () {
    $(".Question_boxA-selectBox").css("border", "1.5px solid");
    $(".Question_boxA-selectBox").css("border-image", "linear-gradient(45deg,#61aad4,#58cd60,#e5d850,#e27fc9)");
    $(".Question_boxA-selectBox").css("border-image-slice", "1");
    selectA_flag = true;
    selectnum ="A"
    if (selectB_flag) {
        $(".Question_boxB-selectBox").css('border', '');
        $(".Question_boxB-selectBox").css("border-image", '');
        $(".Question_boxB-selectBox").css("border-image-slice", '');
        selectB_flag = false;
    } else if (selectC_flag) {
        $(".Question_boxC-selectBox").css('border', '');
        $(".Question_boxC-selectBox").css("border-image", '');
        $(".Question_boxC-selectBox").css("border-image-slice", '');
        selectC_flag = false;
    } else if (selectD_flag) {
        $(".Question_boxD-selectBox").css('border', '');
        $(".Question_boxD-selectBox").css("border-image", '');
        $(".Question_boxD-selectBox").css("border-image-slice", '');
        selectD_flag = false;
    }
    if (selectA_flag) {
        $(".nextBtn-arrow").css('border-top', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-right', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-image-slice', '1');
        $(".site_nextBtn").show();
        nextbtn_flag = true;
    }
});

$(".Question_boxB").click(function () {
    $(".Question_boxB-selectBox").css("border", "1.5px solid");
    $(".Question_boxB-selectBox").css("border-image", "linear-gradient(45deg,#61aad4,#58cd60,#e5d850,#e27fc9)");
    $(".Question_boxB-selectBox").css("border-image-slice", "1");
    selectB_flag = true;
    selectnum ="B"
    if (selectA_flag) {
        $(".Question_boxA-selectBox").css('border', '');
        $(".Question_boxA-selectBox").css("border-image", '');
        $(".Question_boxA-selectBox").css("border-image-slice", '');
        selectA_flag = false;
    } else if (selectC_flag) {
        $(".Question_boxC-selectBox").css('border', '');
        $(".Question_boxC-selectBox").css("border-image", '');
        $(".Question_boxC-selectBox").css("border-image-slice", '');
        selectC_flag = false;
    } else if (selectD_flag) {
        $(".Question_boxD-selectBox").css('border', '');
        $(".Question_boxD-selectBox").css("border-image", '');
        $(".Question_boxD-selectBox").css("border-image-slice", '');
        selectD_flag = false;
    }
    if (selectB_flag) {
        $(".nextBtn-arrow").css('border-top', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-right', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-image-slice', '1');
        $(".site_nextBtn").show();
        nextbtn_flag = true;
    }
});

$(".Question_boxC").click(function () {
    $(".Question_boxC-selectBox").css("border", "1.5px solid");
    $(".Question_boxC-selectBox").css("border-image", "linear-gradient(45deg,#61aad4,#58cd60, #e5d850, #e27fc9)");
    $(".Question_boxC-selectBox").css("border-image-slice", "1");
    selectC_flag = true;
    selectnum ="C"
    if (selectA_flag) {
        $(".Question_boxA-selectBox").css('border', '');
        $(".Question_boxA-selectBox").css("border-image", '');
        $(".Question_boxA-selectBox").css("border-image-slice", '');
        selectA_flag = false;
    } else if (selectB_flag) {
        $(".Question_boxB-selectBox").css('border', '');
        $(".Question_boxB-selectBox").css("border-image", '');
        $(".Question_boxB-selectBox").css("border-image-slice", '');
        selectB_flag = false;
    } else if (selectD_flag) {
        $(".Question_boxD-selectBox").css('border', '');
        $(".Question_boxD-selectBox").css("border-image", '');
        $(".Question_boxD-selectBox").css("border-image-slice", '');
        selectD_flag = false;
    }
    if (selectC_flag) {
        $(".nextBtn-arrow").css('border-top', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-right', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-image-slice', '1');
        $(".site_nextBtn").show();
        nextbtn_flag = true;
    }
});

$(".Question_boxD").click(function () {
    $(".Question_boxD-selectBox").css("border", "1.5px solid");
    $(".Question_boxD-selectBox").css("border-image", "linear-gradient(45deg,#61aad4,#58cd60,#e5d850,#e27fc9)");
    $(".Question_boxD-selectBox").css("border-image-slice", "1");
    selectD_flag = true;
    selectnum ="D"
    if (selectA_flag) {
        $(".Question_boxA-selectBox").css('border', '');
        $(".Question_boxA-selectBox").css("border-image", '');
        $(".Question_boxA-selectBox").css("border-image-slice", '');
        selectA_flag = false;
    } else if (selectB_flag) {
        $(".Question_boxB-selectBox").css('border', '');
        $(".Question_boxB-selectBox").css("border-image", '');
        $(".Question_boxB-selectBox").css("border-image-slice", '');
        selectB_flag = false;
    } else if (selectC_flag) {
        $(".Question_boxC-selectBox").css('border', '');
        $(".Question_boxC-selectBox").css("border-image", '');
        $(".Question_boxC-selectBox").css("border-image-slice", '');
        selectC_flag = false;
    }
    if (selectD_flag) {
        $(".nextBtn-arrow").css('border-top', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-right', '1.5px solid rgb(255, 255, 255)');
        $(".nextBtn-arrow").css('border-image-slice', '1');
        $(".site_nextBtn").show();
        nextbtn_flag = true;
    }
});


$(".siteQ1_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ1question_info").toggleClass("bg_none");
        $(".siteQ2").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ2_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ2question_info").toggleClass("bg_none");
        $(".siteQ3").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ3_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ3question_info").toggleClass("bg_none");
        $(".siteQ4").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ4_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ4question_info").toggleClass("bg_none");
        $(".siteQ5").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ5_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ5question_info").toggleClass("bg_none");
        $(".siteQ6").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ6_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ6question_info").toggleClass("bg_none");
        $(".siteQ7").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});
$(".siteQ7_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ7question_info").toggleClass("bg_none");
        $(".siteQ8").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ8_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ8question_info").toggleClass("bg_none");
        $(".siteQ9").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ9_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ9question_info").toggleClass("bg_none");
        $(".siteQ10").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ10_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ10question_info").toggleClass("bg_none");
        $(".siteQ11").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ11_nextBtn").click(function () {
    if (nextbtn_flag) {
        $(".siteQ11question_info").toggleClass("bg_none");
        $(".sitelogo_info").toggleClass("bg_none");
        $(".nextBtn-arrow").toggleClass("bg_none");
        $(".nextBtn-Circle").toggleClass("bg_none");
        $(".backBtn-arrow").toggleClass("bg_none");
        $(".backBtn-Circle").toggleClass("bg_none");
        $(".siteanswer").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".site_nextBtn_nomal").toggleClass("bg_none");
        $(".siteTop").css('background-color', 'rgba(0, 0, 0, 0.7)');
        $(".Question_box"+ selectnum +"-selectBox").css('border', '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image", '');
        $(".Question_box"+ selectnum +"-selectBox").css("border-image-slice", '');
    };
});



function select_reset() {
    $(".nextBtn-Circle").css('color', '');
    $(".nextBtn-arrow").css('border-top', '');
    $(".nextBtn-arrow").css('border-right', '');
    $(".Question_boxA-selectBox").css('border', '');
    $(".Question_boxB-selectBox").css('border', '');
    $(".Question_boxC-selectBox").css('border', '');
    $(".Question_boxD-selectBox").css('border', '');
    selectA_flag = false;
    selectB_flag = false;
    selectC_flag = false;
    selectD_flag = false;
    nextbtn_flag = false;
}
