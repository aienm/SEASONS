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
            var nametext = $('.Name_textbox').val();

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
                    $(".Question_box" + selectnum + "-selectBox").css('border', '');
                    $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
                    $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
                    // 書き換えたいHTMLのIDを変数に代入
                    var id = 'Answer_mainTitle';
                    // 変数をセレクタに設定し、HTMLのテキストを書き換える
                    var $elm = $('#' + id).text(nametext);
                    $('#' + id).append('さんの回答結果');
                };
            });
        }
    });
});


//選択表示
var selectA_flag = false;
var selectB_flag = false;
var selectC_flag = false;
var selectD_flag = false;
var nextbtn_flag = false;
var selectnum;
var spling = 0;
var summer = 0;
var autumn = 0;
var winter = 0;
var images = [];
var randImg;



$(".Question_boxA").click(function () {
    $(".Question_boxA-selectBox").css("border", "1.5px solid");
    $(".Question_boxA-selectBox").css("border-image", "linear-gradient(45deg,#61aad4,#58cd60,#e5d850,#e27fc9)");
    $(".Question_boxA-selectBox").css("border-image-slice", "1");
    selectA_flag = true;
    selectnum = "A"
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
    selectnum = "B"
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
    selectnum = "C"
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
    selectnum = "D"
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
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ1question_info").toggleClass("bg_none");
        $(".siteQ2").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ2_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ2question_info").toggleClass("bg_none");
        $(".siteQ3").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ3_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ3question_info").toggleClass("bg_none");
        $(".siteQ4").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ4_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ4question_info").toggleClass("bg_none");
        $(".siteQ5").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ5_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ5question_info").toggleClass("bg_none");
        $(".siteQ6").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ6_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ6question_info").toggleClass("bg_none");
        $(".siteQ7").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});
$(".siteQ7_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ7question_info").toggleClass("bg_none");
        $(".siteQ8").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ8_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ8question_info").toggleClass("bg_none");
        $(".siteQ9").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ9_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ9question_info").toggleClass("bg_none");
        $(".siteQ10").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ10_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
        $(".siteQ10question_info").toggleClass("bg_none");
        $(".siteQ11").show();
        $('mouseover', select_reset);
        $(".site_nextBtn").css('display', 'none');
        $(".Question_box" + selectnum + "-selectBox").css('border', '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image", '');
        $(".Question_box" + selectnum + "-selectBox").css("border-image-slice", '');
    };
});

$(".siteQ11_nextBtn").click(function () {
    if (nextbtn_flag) {
        if (selectA_flag) {
            spling = spling + 1;
        } else if (selectB_flag) {
            summer = summer + 1;
        } else if (selectC_flag) {
            autumn = autumn + 1;
        } else if (selectD_flag) {
            winter = winter + 1;
        };
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
    };

    //判定結果の表示
    console.log("spling=" + spling);
    console.log("summer=" + summer);
    console.log("autumn=" + autumn);
    console.log("winter=" + winter);

    if (spling == 3 && summer == 3 && autumn == 3) {
        console.log("春夏秋");
        var images = [
            'image/sprsmr.png',
            'image/smrspr.png',
            'image/sprfal.png',
            'image/falspr.png',
            'image/smrfal.png',
            'image/falsmr.png',
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 3 && summer == 3 && winter == 3) {
        console.log("春夏冬");
        var images = [
            "image/sprsmr.png",
            "image/smrspr.png",
            "image/sprwtr.png",
            "image/wtrspr.png",
            "image/smrwtr.png",
            "image/wtrsmr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 3 && autumn == 3 && winter == 3) {
        console.log("春秋冬");
        var images = [
            "image/sprfal.png",
            "image/falspr.png",
            "image/sprwtr.png",
            "image/wtrspr.png",
            "image/falwtr.png",
            "image/wtrfal.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (summer == 3 && autumn == 3 && winter == 3) {
        console.log("夏秋冬");
        var images = [
            "image/smrfal.png",
            "image/falsmr.png",
            "image/smrwtr.png",
            "image/wtrsmr.png",
            "image/falwtr.png",
            "image/wtrfal.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 1 && summer == 1 && autumn == 1) {
        console.log("冬と春or夏or秋");
        var images = [
            "image/wtrspr.png",
            "image/wtrsmr.png",
            "image/wtrfal.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 1 && summer == 1 && winter == 1) {
        console.log("秋と春or夏or冬");
        var images = [
            "image/falspr.png",
            "image/falsmr.png",
            "image/falwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 1 && autumn == 1 && winter == 1) {
        console.log("夏と春or秋or冬");
        var images = [
            "image/smrspr.png",
            "image/smrfal.png",
            "image/smrwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (summer == 1 && autumn == 1 && winter == 1) {
        console.log("春と夏o秋or冬");
        var images = [
            "image/sprsum.png",
            "image/sprfal.png",
            "image/sprwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 6 && summer == 2 && autumn == 2 && winter == 1) {
        console.log("春と夏or秋");
        var images = [
            "image/sprsum.png",
            "image/sprfal.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 6 && summer == 1 && autumn == 2 && winter == 2) {
        console.log("春と秋or冬");
        var images = [
            "image/sprfal.png",
            "image/sprwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 6 && summer == 2 && autumn == 1 && winter == 2) {
        console.log("春と夏or冬");
        var images = [
            "image/sprsum.png",
            "image/sprwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);

    } else if (spling == 2 && summer == 6 && autumn == 2 && winter == 1) {
        console.log("夏と春or秋");
        var images = [
            "image/sumspr.png",
            "image/sumfal.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);

    } else if (spling == 2 && summer == 6 && autumn == 1 && winter == 2) {
        console.log("夏と春or冬");
        var images = [
            "image/sumspr.png",
            "image/sumwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 1 && summer == 6 && autumn == 2 && winter == 2) {
        console.log("夏と秋or冬");
        var images = [
            "image/sumfal.png",
            "image/sumwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 2 && summer == 2 && autumn == 6 && winter == 1) {
        console.log("秋と春or夏");
        var images = [
            "image/falspr.png",
            "image/falsum.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 2 && summer == 1 && autumn == 6 && winter == 2) {
        console.log("秋と春or冬");
        var images = [
            "image/falspr.png",
            "image/falwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 1 && summer == 2 && autumn == 6 && winter == 2) {
        console.log("秋と夏or冬");
        var images = [
            "image/falsum.png",
            "image/falwtr.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 2 && summer == 2 && autumn == 1 && winter == 6) {
        console.log("冬と春or夏");
        var images = [
            "image/wtrspr.png",
            "image/wtrsum.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 2 && summer == 1 && autumn == 2 && winter == 6) {
        console.log("冬と春or秋");
        var images = [
            "image/wtrspr.png",
            "image/wtrfal.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 1 && summer == 2 && autumn == 2 && winter == 6) {
        console.log("冬と夏or秋");
        var images = [
            "image/wtrsum.png",
            "image/wtrfal.png",
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 4 && summer == 4) {
        console.log("春と夏");
        $(".Answer_QRpic").html('<img src="image/sprsmr.png" alt="QR">');
    } else if (spling == 4 && autumn == 4) {
        console.log("春と秋");
        $(".Answer_QRpic").html('<img src="image/sprfal.png" alt="QR">');
    } else if (spling == 4 && winter == 4) {
        console.log("春と冬");
        $(".Answer_QRpic").html('<img src="image/sprwtr.png" alt="QR">');
    } else if (summer == 4 && autumn == 4) {
        console.log("夏と秋");
        $(".Answer_QRpic").html('<img src="image/smrfal.png" alt="QR">');
    } else if (summer == 4 && winter == 4) {
        console.log("夏と冬");
        $(".Answer_QRpic").html('<img src="image/smrwtr.png" alt="QR">');
    } else if (autumn == 4 && winter == 4) {
        console.log("秋と冬");
        var images = [
            'falwtr.png',
            'wtrfal.png'
        ];
        var randImg = images[Math.floor(Math.random() * images.length)];
        $('.random').attr('src', randImg);
    } else if (spling == 11) {
        console.log("春");
        $(".Answer_QRpic").html('<img src="image/spr.png" alt="QR">');
    } else if (summer == 11) {
        console.log("夏");
        $(".Answer_QRpic").html('<img src="image/smr.png" alt="QR">');
    } else if (autumn == 11) {
        console.log("秋");
        $(".Answer_QRpic").html('<img src="image/fal.png" alt="QR">');
    } else if (winter == 11) {
        console.log("冬");
        $(".Answer_QRpic").html('<img src="image/wtr.png" alt="QR">');
    } else {
        var val = Math.max(spling, summer, autumn, winter);
        if (spling == val) {
            var val2 = Math.max(summer, autumn, winter);
            if (summer == val2) {
                console.log("春と夏");
                $(".Answer_QRpic").html('<img src="image/sprsmr.png" alt="QR">');
            } else if (autumn == val2) {
                console.log("春と秋");
                $(".Answer_QRpic").html('<img src="image/sprfal.png" alt="QR">');
            } else if (winter == val2) {
                console.log("春と冬");
                $(".Answer_QRpic").html('<img src="image/sprwtr.png" alt="QR">');
            };
        } else if (summer == val) {
            var val2 = Math.max(spling, autumn, winter);
            if (spling == val2) {
                console.log("夏と春");
                $(".Answer_QRpic").html('<img src="image/smrspr.png" alt="QR">');
            } else if (autumn == val2) {
                console.log("夏と秋");
                $(".Answer_QRpic").html('<img src="image/smrfal.png" alt="QR">');
            } else if (winter == val2) {
                console.log("夏と冬");
                $(".Answer_QRpic").html('<img src="image/smrwtr.png" alt="QR">');
            };
        } else if (autumn == val) {
            var val2 = Math.max(spling, summer, winter);
            if (spling == val2) {
                console.log("秋と春");
                $(".Answer_QRpic").html('<img src="image/falspr.png" alt="QR">');
            } else if (summer == val2) {
                console.log("秋と夏");
                $(".Answer_QRpic").html('<img src="image/falsmr.png" alt="QR">');
            } else if (winter == val2) {
                console.log("秋と冬");
                $(".Answer_QRpic").html('<img src="image/falwtr.png" alt="QR">');
            };
        } else if (winter == val) {
            var val2 = Math.max(spling, summer, autumn);
            if (spling == val2) {
                console.log("冬と春");
                $(".Answer_QRpic").html('<img src="image/wtrspr.png" alt="QR">');
            } else if (summer == val2) {
                console.log("冬と夏");
                $(".Answer_QRpic").html('<img src="image/wtrsmr.png" alt="QR">');
            } else if (autumn == val2) {
                console.log("冬と秋");
                $(".Answer_QRpic").html('<img src="image/wtrfal.png" alt="QR">');
            };
        };
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
};
