"use strict";

function MicAccessTool(o) {
  (this.init = o || {
    link: "",
    contact: "",
    buttonPosition: "left",
    forceLang: "en"
  }),
    (this.locale = {
      en: {
        btn_open: "Accessibility Menu",
        btn_close: "Close",
        sitelogo: "Logo",
        keyboard_root: "Keyboard Nav",
        disable_animattions: "Stop Animations",
        big_cursor: "Big Cursor",
        access_declaration: "accessibility statement",
        debug_contacts: "report an accessibility problem",
        reset_all_settings: "Reset Settings",
        image_without_alt: "image without text",
        contrast_block: {
          header: "color contrast",
          btn_monochrome: "Uncolor Display",
          btn_bright: "Bright Contrast",
          btn_invert: "Reverse Contrast"
        },
        text_block: {
          header: "text size",
          btn_font_up: "Bigger Text",
          btn_font_down: "Smaller Text",
          btn_font_readable: "Readable Text"
        },
        content_block: {
          header: "highlighting content",
          btn_underline_links: "Underline Links",
          btn_underline_headers: "Underline Headers",
          btn_images_titles: "Images Titles"
        },
        zoom_block: {
          header: "zoom in",
          btn_cursor_white: "White Cursor",
          btn_cursor_black: "Black Cursor",
          btn_zoom_in: "Zoom Screen"
        }
      }
    }),
    (this.currentLanguage = this.locale[this.init.forceLang] || this.locale.en),
    this.checkLanguageBox(),
    this.buildToolBox(),
    (this.toolBox = document.getElementById("mic-access-tool-box")),
    (this.toolBoxOpenButton = document.getElementById(
      "mic-access-tool-general-button"
    )),
    (this.toolBoxCloseButton = document.getElementById(
      "mic-access-tool-box-close-button"
    )),
    this.toolBoxOpenButton.addEventListener("click", this.openBox.bind(this)),
    this.toolBoxCloseButton.addEventListener("click", this.closeBox.bind(this)),
    document.addEventListener("keyup", this.openCloseBoxKeyboard.bind(this)),
    (this.micContrastMonochrome = document.getElementById(
      "mic-toolbox-contrast-monochrome"
    )),
    (this.micContrastSoft = document.getElementById(
      "mic-toolbox-contrast-soft"
    )),
    (this.micContrastHard = document.getElementById(
      "mic-toolbox-contrast-hard"
    )),
    this.micContrastMonochrome.addEventListener("click", this.contrastChange),
    this.micContrastSoft.addEventListener("click", this.contrastChange),
    this.micContrastHard.addEventListener("click", this.contrastChange),
    (this.micDisableButtonsAnimations = document.getElementById(
      "mic-toolbox-disable-buttons-animations"
    )),
    (this.micDisableButtonsKeyboard = document.getElementById(
      "mic-toolbox-disable-buttons-keyboard"
    )),
    this.micDisableButtonsAnimations.addEventListener(
      "click",
      this.onceButtonChange
    ),
    this.micDisableButtonsKeyboard.addEventListener(
      "click",
      this.onceButtonChange
    ),
    (this.micToolboxFontsUp = document.getElementById("mic-toolbox-fonts-up")),
    (this.micToolboxFontsDown = document.getElementById(
      "mic-toolbox-fonts-down"
    )),
    (this.micToolboxFontsSimple = document.getElementById(
      "mic-toolbox-fonts-simple"
    )),
    this.micToolboxFontsUp.addEventListener("click", this.fontsChange),
    this.micToolboxFontsDown.addEventListener("click", this.fontsChange),
    this.micToolboxFontsSimple.addEventListener(
      "click",
      this.onceButtonChangeReadPage
    ),
    (this.micToolboxContentLinks = document.getElementById(
      "mic-toolbox-content-links"
    )),
    (this.micToolboxContentHeaders = document.getElementById(
      "mic-toolbox-content-headers"
    )),
    (this.micToolboxContentImages = document.getElementById(
      "mic-toolbox-content-images"
    )),
    this.micToolboxContentLinks.addEventListener(
      "click",
      this.onceButtonChange
    ),
    this.micToolboxContentHeaders.addEventListener(
      "click",
      this.onceButtonChange
    ),
    this.micToolboxContentImages.addEventListener(
      "click",
      this.onceButtonChange
    ),
    (this.micToolboxCursorWhite = document.getElementById(
      "mic-toolbox-cursor-big-white"
    )),
    (this.micToolboxBigCursor = document.getElementById(
      "mic-toolbox-big-cursor"
    )),
    (this.micToolboxCursorBlack = document.getElementById(
      "mic-toolbox-cursor-big-black"
    )),
    (this.micToolboxZoomUp = document.getElementById("mic-toolbox-zoom-up")),
    this.micToolboxCursorWhite.addEventListener("click", this.cursorChange),
    this.micToolboxBigCursor.addEventListener("click", this.cursorChange),
    this.micToolboxCursorBlack.addEventListener("click", this.cursorChange),
    this.micToolboxZoomUp.addEventListener("click", this.onceButtonChange),
    (this.micToolboxDisableButtonsAll = document.getElementById(
      "mic-toolbox-disable-buttons-reset-all"
    )),
    this.micToolboxDisableButtonsAll.addEventListener(
      "click",
      this.resetApp.bind(this)
    ),
    this.initialApp();
}
(MicAccessTool.prototype.checkLanguageBox = function() {
  if (!this.init.forceLang) {
    var o = document.body.parentElement;
    if (o.hasAttribute("lang")) {
      var A = o.lang;
      this.currentLanguage = this.locale[A] || this.locale.en;
    } else this.currentLanguage = this.locale.en;
  }
}),
  (MicAccessTool.prototype.buildToolBox = function() {
    var o = this.currentLanguage || this.locale.en,
      A =
        '<button title="' +
        o.btn_open +
        '" tabindex="1" id="mic-access-tool-general-button" class="mic-access-tool-general-button"><div><img src="data:image/png;base64,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" alt="' +
        o.btn_open +
        '"></div></button><div id="mic-access-tool-box" class="mic-access-tool-box"><div class="mic-access-tool-box-header">Accessibility Menu &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(Esc) <button title="' +
        o.btn_close +
        '" id="mic-access-tool-box-close-button"><span><img alt="' +
        o.btn_close +
        '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4wcGCDsY6oJmlgAAAaNJREFUOMuV1L9qFFEUx/HPHbHRQgXBJGAl+hbGRhTB3VeINsZOFG1MLIRVEUVsbGIRn0AwSaUW6mMoaCVxqxCwENQdi71j7s7OztwcGJiZe873N+ffBFjd+CHaIgp8gEF/To7F+OO4iC3sVrFFAj+LtXgt1oS74EdwP8bexeEqtoh+ARdwBqfxEue6RBL4IyzjEHpYqHyKMVuJZ1jHKAqttYnU4NdwAF9xA18qv1ADHMNTXInZfY7BH9OetMCX8T71DbUv6hSJVod/i/cT8AkBWHkzFELZJZINnxKAe5tDZTlT5BYu4XoOvFGgoVxPcDWK7MZJOZgDnykAKxvbwvj4KJ5jKTn+HjNrhbO3B1P2oD9f3f7F79rxqOHd/gSSUXwcSwQ/8QcndexJq0DLnC/hlcxlbOzBDHja0KxlbBTIgFeWLVLsBz7ozynH7ju4nVOukDxkb+jq5jZlqDJJ92Qqk7TJN41/Vp0bOujNG4VRlcmdWiYvcKppij5FcNaGPuwtxCT+l2sdv/AOw4kmJ2U6H0XftsEnBmOvXCdwGa+xU8X+A2Lmv/3au7pLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA3LTA2VDA4OjU5OjI0LTA0OjAw9a38YQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNy0wNlQwODo1OToyNC0wNDowMITwRN0AAAAASUVORK5CYII="> </span></button></div> <div id="mic-toolbox-contrast-block" class="mic-contrast-block mic-buttons-block"> <button title="' +
        o.keyboard_root +
        '" id="mic-toolbox-disable-buttons-keyboard"><span><img alt="' +
        o.keyboard_root +
        '" src="data:image/png;base64,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"> </span><span>' +
        o.keyboard_root +
        '</span></button> <button title="' +
        o.disable_animattions +
        '" id="mic-toolbox-disable-buttons-animations"><span><img alt="' +
        o.disable_animattions +
        '" src="data:image/png;base64,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"> </span><span>' +
        o.disable_animattions +
        '</span></button> <button title="' +
        o.big_cursor +
        '" id="mic-toolbox-big-cursor"><span><img alt="' +
        o.big_cursor +
        '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDctMDVUMDk6MzQ6NDItMTA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTA1VDEwOjI4OjUyLTEwOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTA1VDEwOjI4OjUyLTEwOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRiZGViNDk0LTU5YTAtNGQ5YS1iYmQ2LTgxNTA0Yjg5MmI4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0YmRlYjQ5NC01OWEwLTRkOWEtYmJkNi04MTUwNGI4OTJiODIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YmRlYjQ5NC01OWEwLTRkOWEtYmJkNi04MTUwNGI4OTJiODIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRiZGViNDk0LTU5YTAtNGQ5YS1iYmQ2LTgxNTA0Yjg5MmI4MiIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0wNVQwOTozNDo0Mi0xMDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YGmfrAAAAoFJREFUWIXN2EFymzAUgOHfnR7AR3BPUHfLyl6xdU5QMjpA7RO0PkGcfZnQEyRdsrJXbENPEPcE9Q3ogiejytgIEHbfTMZCI5gv6EkPGBVFwX8VRVHU/gWhmgWherq25V3DmOjaqCYQCCoI1XhoDLiBACJgew2UKwhgyhVQbUBQoSb+KWW4glZALu0p8BqEajqAxxmUA3Mq1JjyTk1vBSJL48MZ1OImIAv1YqCeg1BFNwFpVJbGd0BidD/5QrUG6cjS+J5T1MPNQHBErYyuZd9S0wsEkKXxBrg3unrVv94ggCyNE05RnXZ1LyADNQcO0jWjQ6nxBhLUzkJN26K8ggSV16DeXHd17yAD9YEOpWYQkKAOdKh/g4EuoF4v7eqDgjQqS+NPOJaawUE6zpSapT3u/ZAIyZex0fWLcvXpvocgVB8F6x8kxXXZ8rQoCJW+g/2mLAjV2Hq+/tnxUpHOqc53SKbjGdghdSxL410QqpxyM4QyZ35LO6faLAFyWYVGfO8GEsyWMhcWQahWxsUfgWO1z9L4W5trt54yC4P8RgYgAfZyGLV9ZWoFqsHo+GId/zDa0SCgGkxO9bA/sTa6DVW+2FgvoJmF2VGWhEdjzGfdkHx6kcNxmxcAV9BXA5NkaTyXkrATHMDMKpxr63yvIB2JuatKmPlynJ4sjfdU2EkQqplvUB2maVWZd8kpl1xBtRgjaleVTOleDhcuW4ALqAkD1qrSz9DymxvjGnOpCbR2wJysKqoXxj/AwhhqtmtjdO6z8Gg0ajr3n5DpeLswJKH8B/fnBhRF4Q8kqC3lnqVjT5lfm9NCWg/y/YC2FlAOPMoKbBfnPpx3jT5f1S5O2a3iLzPTPGHgEXw6AAAAAElFTkSuQmCC"> </span><span>' +
        o.big_cursor +
        '</span></button></div> <div id="mic-toolbox-contrast-block" class="mic-contrast-block mic-buttons-block"> <button title="' +
        o.contrast_block.btn_monochrome +
        '" id="mic-toolbox-contrast-monochrome"><span><img alt="' +
        o.contrast_block.btn_monochrome +
        '" src="data:image/png;base64,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"> </span><span>' +
        o.contrast_block.btn_monochrome +
        '</span></button> <button title="' +
        o.contrast_block.btn_bright +
        '" id="mic-toolbox-contrast-soft"><span><img alt="' +
        o.contrast_block.btn_bright +
        '" src="data:image/png;base64,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"> </span><span>' +
        o.contrast_block.btn_bright +
        '</span></button> <button title="' +
        o.contrast_block.btn_invert +
        '" id="mic-toolbox-contrast-hard"><span><img alt="' +
        o.contrast_block.btn_invert +
        '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAsCAYAAADxRjE/AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wcKEBo0DCZS5gAABPRJREFUWMPtmU1sG1UUhb84f23apCXQQovcFjBVC2lRHQR0kCAtiEHlRwiBxIbVwApYwAYWiAUbliyKWIAGCViA1AUIIdCA1IgWplCUWqGoIWmMSkwogtCIpHHIr1lwBj0mY3vsxA4SXMmL5xm/OXPfeffdcwz/5bBsZ1nXK4mGagH6nlvqehvQAswBed9zC9XMsyKgg2wFD7Jsp0HgmoEmoBVoB3YCHcAUcF6fPLAAzAKzvucuVvsCTctcqQ3AbYAF3ARcA7Rp3gagIKAJ4BxwEvgCOK5x7egRzoJlO3uAu4H9QBK4AtikTJeKX4CfgTGgD/gE6PU9dyFYuWJUig06gg4bgX3AQ8A9wPYSP58HpoEZUaUldH0C6AU+BI4B3/ueOx9+ZkWgI7K7CbgLeB7YFWOBJoBB4BvRZgfQKf63ijLoxV4F3vQ993Qcjidi0qMNeBQ4DFwbk3qzwCngaeA+oAd4BHgDuGDctxZ4BnjSsp2uOBM3lsuyZTvtevDjwNa4L6pqkfE994NcNjOby2Z+T6bSo8AQ8LnKYVKgG7QanclUejiZSo/5notlO+SymXiggxst21mv7DylSSuJPHAml818bMw7n8tmxnLZzFAylR5RldkBrAPW6BnNQH8um5mMAryEHpbthE+uXeLw1St9avqeewp4CTiiaoJq/BNAj2U7HUUwFV9qy3ZSqhKX1+ro9z33J+AF4B2VwiCeU90vz+lcNvM3NZKp9CHgWR0g1UQe+DZEj39kXc+bTqbS50SN68TvzcCPyVR6wPfci2GaJIpkeQvQrR/XKsvmOTAAeCqRQdyqw2sJtYrRoxvYXedGsRd43xh3mRQxa3Yx0LcA6Xoi9j03CxwFxvXVpcBey3Y2qjFbCjq0Q69SL1FroOHqMAp8DfyhcaewNEZ2eQbH1tWSy1HAjRgHPhMt1gjLTuA79TKR9GgWl9avkgAaV6ZnNG4DtoUzHcXpxVVUbTNqXxdK4YkCXdCn7iE1M2JSIW6X11CtdlyhaC/XlBWjx6pkWh1l2hAMkaueiAA8FeJUPaNVpbbRUD9TYV4nQpxaALKhJr3mfolRpzcANxpaMw/8EE5iIkIPzgE5KY+61GmjVl8phbNW4wvAaQmGpaBDRX4AOFtPV0qSbq8Ok4AeI77njvqeuxinYfpS+q6ecQC43xgHojiesPU9t0++RE2zbOjQRtGix7jlGPBRFBOaSvgcJ9UuHqgFJULW2oPAQbURwXF+3PfcobK2WIjX/cDLwA3qtlYksyEvpQlISV6lDR/k3WClo8ybRIldnQe+0gS/1YAeLbLWXjcEx4IKgKtiEN+ANPj2q7K9BXigiuO9ELWKlu3cDBwCbNlswQl4FngROON7bqGYy9RUojkPzMBhy3beUhm6vQKhuwgsGj36ZTIqdwN3iMNbjZcbBN4G3gvbwFW5psrOfnkS98YEPqbdf1hGZZcs4TtDtMwL8CvAEd9zJ8t5ebH9ad9zT1i2kxPXHpMzVCo6gYflrjaqMjSHAE9oz7wmSkzHwVKR1avvtsmfOKiNtKeKfXgeOCEhexQYDCixLKu31GGg8XZtpG5Jos3AJeqHzYwWVH2mgEmJ137++jegz/fci3HBVgy61MR6gX3A9VLPHUb/UBDIHDAM+OZGqwRsxZwuEzl5cZ8KbFj9zKkGL5SrDPXuhavu8P6Pf2v8CQZz5fDg8W3/AAAAAElFTkSuQmCC"> </span><span>' +
        o.contrast_block.btn_invert +
        '</span></button></div><div class="mic-fonts-block mic-buttons-block"> <button title="' +
        o.text_block.btn_font_up +
        '" id="mic-toolbox-fonts-up"><span><img src="data:image/png;base64,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" alt="' +
        o.text_block.btn_font_up +
        '"> </span><span>' +
        o.text_block.btn_font_up +
        '</span> <span id="mic-toolbox-fonts-up-enabled"></span></button> <button title="' +
        o.text_block.btn_font_down +
        '" id="mic-toolbox-fonts-down"><span><img src="data:image/png;base64,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" alt="' +
        o.text_block.btn_font_down +
        '"> </span><span>' +
        o.text_block.btn_font_down +
        '</span></button> <button title="' +
        o.text_block.btn_font_readable +
        '" id="mic-toolbox-fonts-simple"><span><img src="data:image/png;base64,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" alt="' +
        o.text_block.btn_font_readable +
        '"> </span><span>' +
        o.text_block.btn_font_readable +
        '</span></button></div><div class="mic-content-block mic-buttons-block"> <button title="' +
        o.content_block.btn_underline_links +
        '" id="mic-toolbox-content-links"><span id="ul"><img src="data:image/png;base64,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" alt="' +
        o.content_block.btn_underline_links +
        '"> </span><span>' +
        o.content_block.btn_underline_links +
        '</span></button> <button title="' +
        o.content_block.btn_underline_headers +
        '" id="mic-toolbox-content-headers"><span id="ul"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAsCAYAAADxRjE/AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wcKEB4ASf5jVwAAA9tJREFUWMPtmUto1FAUhr+ZSWttKdVafNJStYLahVQKYrAKomYhKIK6UBBKwLWu1KXgWhB3avYufKwUgoIIGnFAC+IDq1MfFYtWrVRtp+1MxoUn5RozdZppkxE8EGYycx9fkv+ce84NiOmGSaWbx5iQk4RjWwXdMJNAF9AEJCuENQn0Ar2Obf3QDZOEbpg4toVumGuBvYAO1HsXVAGWAD4DF4FLjm1lNce2vD/3ACcrWB01QB/gaCKPlUC7r9EEkAcKMcqiWnniq4Edk9AC5vo6XQZuAF+AVISwBQFdB3QDS+UC5gBzAVRoz3LAbeAccF8G8OvbBcblMwVUlei4BRl/Qs41OZK+NgUgDbwCzgJ16iBawMB54BHw1LGtkSKhpwpYDtQCQ8CHYm0D+i4AWgRsABh0bMsNaDqiG+Y14HSQboLuhit6KmZLgEPAMXHg5hKB64GNwAk5dsrjD4zHQDZoHG2KMDOVNcqEHeLVaeBlCdxzxOH3KfM/A96pjZSIlizmoWEsJdJQNRjG3DB9w0LXAW3KxNONDkHfZx26SgmDkcfxZBmxNNZk5J+z/9D/oSsYOhEmb48bOtTCFBY6Cwwri4sbcpzHwJsoob18YQWwaBp3Vr3AH8BYVNB5mbAg0E1eduav6n2/aZI0Ba2sJZtWhha9ZKcRWOzLziZB1d8kDV2lnI8pBUFk8siL92/XDdMood82YL9y3ufY1teo7vRb4LwUAACbgVrdMBuAK45t5Xx3vRE4Ahz06jzAAV6HmTwUtGNbWd0w7wt4t1Q5G4DjwG7dMDOyV5EEForuu6TiAXgvZVTGk5JPRjMLrUzwVYrOLLAVaJVKpkOaDgl0g9J9EHgC2MA1ufhpAYeClt0ob6InumEelf2IA0AnME+pzl0BHZd4fBe46tjWPV8tGImm/ZHkhhzVwBpgvjJ2Dngqd35iJnLxcuShhjRXiSo9umGmlJyi4NhWvthTi0TTIo9qic9BVcwfxarsxiYCkqVvwGiRfY8Zl8cy4HCYhcE393XgITASBXSbhLdybQR4Pl3ouAvb/Ew6Yu4vYGl+bb67ZQAnZUUcmsLZx4I4tCK7RyumAnJsaxi4N1uVgRJJ9CBGTfFkFboT2KUb5i1glHj2p9slRajxl2aaoq2C8thagTPAHeCBLweebctJvtLB728nJiskD/qjxEzVqoEtwKaYCl7/0/0OfPKkQH+mJ9fctn5UsrCVPmdJxXSokh0FLOBCf6bnu6Z4aho4xa9XFs3SMdY9O5l/GHgB3HRsa0A3zN9ffiohp0UyNTdG4IT42qD3aiQwK6zkV80q209io0A8rCdWhAAAAABJRU5ErkJggg==" alt="' +
        o.content_block.btn_underline_headers +
        '"> </span><span>' +
        o.content_block.btn_underline_headers +
        '</span></button> <button title="' +
        o.content_block.btn_images_titles +
        '" id="mic-toolbox-content-images"><span id="ul"><img src="data:image/png;base64,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" alt="' +
        o.content_block.btn_images_titles +
        '"> </span><span>' +
        o.content_block.btn_images_titles +
        '</span></button></div><div class="mic-cursors-block mic-buttons-block"> <button title="' +
        o.zoom_block.btn_cursor_white +
        '" id="mic-toolbox-cursor-big-white"><span><img alt="' +
        o.zoom_block.btn_cursor_white +
        '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDctMDVUMDk6NDE6MjYtMTA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTA1VDEwOjIzOjMyLTEwOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTA1VDEwOjIzOjMyLTEwOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmYzOGM4NjMyLTk0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"> </span><span>' +
        o.zoom_block.btn_cursor_white +
        '</span></button> <button title="' +
        o.zoom_block.btn_cursor_black +
        '" id="mic-toolbox-cursor-big-black"><span><img alt="' +
        o.zoom_block.btn_cursor_black +
        '" src="data:image/png;base64,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"> </span><span>' +
        o.zoom_block.btn_cursor_black +
        '</span></button> <button title="' +
        o.zoom_block.btn_zoom_in +
        '" id="mic-toolbox-zoom-up"><span><img alt="' +
        o.zoom_block.btn_zoom_in +
        '" src="data:image/png;base64,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"> </span><span>' +
        o.zoom_block.btn_zoom_in +
        '</span></button></div><div class="link-access-page"><a class="atb-hide-if-empty" title="' +
        o.access_declaration +
        '" id="mic-toolbox-link-nagishut" href="https://adally.com" target="_blank">' +
        o.access_declaration +
        '</a> <a class="atb-hide-if-empty" title="' +
        o.debug_contacts +
        '" id="mic-toolbox-link-contact" href="https://adally.com">' +
        o.debug_contacts +
        '</a> <button title="' +
        o.reset_all_settings +
        '" id="mic-toolbox-disable-buttons-reset-all"><span>' +
        o.reset_all_settings +
        '</span> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAbCAYAAACAyoQSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDctMDVUMDk6NDM6MDUtMTA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTA1VDEwOjIyOjE1LTEwOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTA1VDEwOjIyOjE1LTEwOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQ5ZjJkYTQ0LTdlMWEtNDU4MS1hYTk4LWQzZTc5MmZhNWJjNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpkOWYyZGE0NC03ZTFhLTQ1ODEtYWE5OC1kM2U3OTJmYTViYzQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkOWYyZGE0NC03ZTFhLTQ1ODEtYWE5OC1kM2U3OTJmYTViYzQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ5ZjJkYTQ0LTdlMWEtNDU4MS1hYTk4LWQzZTc5MmZhNWJjNCIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0wNVQwOTo0MzowNS0xMDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+eCWO5gAAAhNJREFUSInFlr1x2zAYhh/m3IcjMBOEaZHGrpDSG1g6pI80gaUJJPfBSZlAchdUYhO2oScwN4gygVIAPIMU+OfklPdORxD4iIffn4jodDpxab25OBG48m+iKOp9QEh1DSTudwSK3Ois7zk/olHtpgXqQF+A245998BD2wu0Qj9++pwCK2CZG50JqWJg0wNrKgOmudHlUOjOATJgDuywYQQbyi3w6HsjpErdM3cN25vc6GII9ABcA4XbIHZLa6z3xzb3XFRmwH0I7HNqheQp9cbT3OhtG6ySe6GFkKrEpiR21w9N276WKYBESDXrg3rwLTY1AKmQatEHPTbuU2y4Vi53Q8FrbF2ArfqamuH9xkseay/jF8VAPWDrIxZS3WJbChjYp6+VkOoX1onlj+9fF9X8VcMoxpb/vqtSR6jAevven2zm9B5bcZt/AAQo3TXugv4OGf2FktBkW8sEjV+h2F3LLmhRQce0SEiuPqo9nrqgmTc+66+Rmnnjvb9w1jJCqg0wcVPvml+LIXJePmPDm+VG3/icUE6X3njnNhgLPPCSz2XT5gzqPKsMU+AwFOwBUze1Dn3Ug9WbG73Afjsr8LOQatIDnAA/PeA2N3oesu38GxRSragXxBFbbE/YNkiAt9h/scSz2+ZGT/29Rp2R3Plow7DeLYF5bvS+uTD6YObB77DhS72lzMEeQ7Be6KX0Xw7bfwAec98ek4CHlwAAAABJRU5ErkJggg==" alt="' +
        o.reset_all_settings +
        '"></button></div><div dir="ltr" class="mic-toolbox-all-credits"><a target="_blank" href="https://adally.com//contact-us/"><span>Contact Us</span></a></div>  <div dir="ltr" class="mic-toolbox-all-credits"><a target="_blank" href="https://adally.com/"><span>Free Website Scan</span></a></div><div dir="ltr" class="mic-toolbox-all-credits"><a target="_blank" href="https://adally.com/step-1/">Get Our Widget</a></div> <div dir="ltr" class="mic-toolbox-all-credits"><span style="float:right;margin-top:-65px;"><a target="_blank" href="https://adally.com/"><img style="width:110px;" alt="' +
        o.sitelogo +
        '" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAkCAYAAAANdf2OAAAABmJLR0QA/wD/AP+gvaeTAAAFUElEQVRoge2aa4hVVRTHf0vHsKIpxUYdTFHpg2mQoWVJjBlUZkpmVvRBUCooSOtDIb2+9YCK0j5IyZQGRYaPyF5ahGUlkY2SzwrRTCMdG7MxX43z78PeB/eczrnnHKfbXPT+4cLe+67/Xuusvc66e699TdIfVFE2mCR1tRGnM2qC9i3Amq4y5DTD1cAK6OjgVjNr6Rp7Ti9Iao3a3brSkDMBVQeXGTXZIv8PJNUBF/nuXjPb3cn5aoBBvnvMzHZL6g308mP7zexgZ3TkNSTC+LIrK23HrMCW5/+D+YYG8230Y88GY7M6b3Wq7oZISTVFlBlVB5cZp5yDJfUBaoFWXD6TpEFAHy+y08x+T+HWerkjQLOZtRXQezZQB7R7vUf82CVe5LCZbS0wV3/fPWRm+0rI9gYu8N1mM2tNkw1RKIIl1Up6RtIuoBnYDuwDfpA0EXgcWOc/N8e4PSTNlrQFOOi5vwK7Jd2fQ/cESWuAP4GdwC6gRVIjMDTQ+2aBRxrr7dgOzMuQfTiQvTOvgtwRLGk48B4wJOHri4FrSnDrgGW4B4qjLzARWJnC7Y57+KRF6AncBbxYyvauRK4IllQPrKKjc/cAG3DRCJBY05DUE3ifjs5tAb7DvQWpXI8X6Ojc48B6YIfnVXQtJW+KeA6o9+0DwFRgoJmNxOXDB4GjKdyHgNG+/beXrTezUbjonQbsTyJKuhIIt1OvAwPM7HIzGwKMwi1UxSLTwZL6cTLntAOTzGyZmbUDmNlxM5sLvJLA7UZHBz1gZnPN7JjnysyWAHNS1M8GzLcXm9lMM4uiHjNrwi1QxSJPBF8byH1sZl8lCZnZbwnDw4B+vr0LWFCAC3Bd0H6iILcikMfB/YP2hgLzKcb9Por6FFjY8UfdC333sJn9lJNbJCeHspYqle/7RORx8OGg3TtDNnRoS2e4fm98zPd7SjonJ/dAhp4Q4W1O3wzZ+ozvE5HHwZuD9mS/Of8XfK5uCIY2AduAE74/WtLgFG4P4NYYN9TdDbithI13BO2NJeTi+BG3KwG4StLAFPvqcFvJwsjj4LVAVNmqBxZ6h4QGnAe8DURRtg6QL+B/5sd6AIsl9YpxuwPzcXtpcJEfpYMlgehLki6LGydpOjAjGPoyxzMB4E9jH/juWd6+PqGMf3MWkv0GJiLzoGFmbZIeAd7yQ7cDIyS9ijuJDQXuA6LVPwEsxf3A/YzbITT4BxgNbJY0HxfddcDdQOi4ecANwFbgZeBeYDCuzPi1pEXAaj/fNNyJMcqP0WFmaQEfPApcD5wLjAE2SVoA/OLtm0Hy4Sof8pYrY6W+NLRLelLSXkk3Btzpktpy8F+T1OQXNOKOkNScg9skqVHSR56Xu1wpaYqkozl0RLgnw1cNkWDuWoSZzcFFW9q93R7gMdyK18W4bwATcDWEJLQCTwHDgZEx7ibgCuDzFG47sAjYAszMeIxEmNly3Ha0KUVkD5C4Pc1CoWqamTVKWoY7yY3BVdNacLfR7+IcEVXQNse4n0gaBkwGxuGqaYeAb3G5th63V24EvolxdwDjJDXgUsIAoA33I7UEdxKcAnyBe7XBLVpU+InG1gdj22I61koahUtj43A59ygup68Gnubkcf8EeRGEfZfeaFQ6JC0NfDUpQ7Z4ijiTIVdJvCnq4t66XKg6OAPeue/gSqMAK4scz6sOToGk8ZKW4/b00W3JIVzhPTcq5tq+AnEp7u9kEf4CpvpdTW5UIzgbAj4FxprZqqLkagSn40PcVm59qcvQLFQdnAJfHi1VIs2F0MG1ihU6qjhlnB81qn/ALjNqOHkrXEUZ8A86bxAvIp33lQAAAABJRU5ErkJggg=="></a></span></div>  <div dir="ltr" class="mic-toolbox-all-credits" style="float:right"><span style="float:right;padding-top:0px;padding-right:15px;margin-top:-15px">Powered by: <a target="_blank" href="https://adally.com/">Adally.com</a></span></div></div>',
      t = document.createElement("style");
    (t.textContent =
      '#mic-init-access-tool button{border:none;outline:0;-webkit-box-shadow:none;box-shadow:none;background:0 0;border-radius:0;color:#333}#mic-init-access-tool a{outline:0;display:inline-block;color:#333;width:100%;line-height:1}#mic-init-access-tool a:focus,#mic-init-access-tool a:hover{color:#8b0000;border-color:#8b0000;background-color:#fff}#mic-init-access-tool a:focus span,#mic-init-access-tool a:hover span{color:#8b0000}#mic-init-access-tool .atb-hide-if-empty{display:none!important}#mic-init-access-tool span.mic-toolbox-images-titles{display:none!important}#mic-init-access-tool *{font-size:12px!important;font-family:Barlow Semi Condensed, sans-serif;text-decoration:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important;line-height:1!important;-webkit-transition:none!important;transition:none!important}#mic-init-access-tool .mic-access-tool-general-button{position:fixed!important;z-index:99999!important;display:block!important;bottom:7px;left:7px;background-color:#17384c00;cursor:pointer;border:none;border-radius:4px 4px 20px 4px;color:#0053a5;padding:0}#mic-init-access-tool .mic-access-tool-general-button>div{font-size:0!important;position:relative;text-align:center;padding:4px 6px!important;background-color: #0000cd03}#mic-init-access-tool .mic-access-tool-general-button>div span{display:block;margin-bottom:4px;line-height:1;font-weight:700;font-size:11px!important;font-family:Barlow Semi Condensed, sans-serif}#mic-init-access-tool .mic-access-tool-general-button>div img{display:inline-block;max-width:50px}#mic-init-access-tool .mic-access-tool-general-button.mic-access-tool-general-button-right{left:auto;right:7px;border-radius:4px 4px 4px 20px}#mic-init-access-tool .mic-access-tool-general-button:focus,#mic-init-access-tool .mic-access-tool-general-button:hover{color:#8b000000;border-color:#84ff0000;background-color:#ffffff00}#mic-init-access-tool .mic-access-tool-general-button:focus span,#mic-init-access-tool .mic-access-tool-general-button:hover span{color:#84ff00}#mic-init-access-tool .mic-access-tool-box{color:#fff;overflow-y:auto;-webkit-box-shadow:1px 0 4px 0 #777;box-shadow:1px 0 4px 0 #777;position:fixed;height:100vh;width:320px;top:0;left:0;background-color:#20409a;z-index:9999999;visibility:hidden;opacity:0;-webkit-transition:opacity .4s!important;transition:opacity .4s!important;border-radius:7px}#mic-init-access-tool .mic-access-tool-box>div:not(.mic-access-tool-box-header):not(.mic-toolbox-all-credits){position:relative;background-color:#fff0;max-width:96%;margin:0 auto 0px;text-align:center}#mic-init-access-tool .mic-access-tool-box>div:not(.mic-access-tool-box-header):not(.mic-toolbox-all-credits) .mic-subtitle-span{font-size:20px!important;display:block;padding:12px 0;text-align:center;color:#8b0000;font-variant:small-caps}#mic-init-access-tool .mic-access-tool-box.opened-mic-access-tool{visibility:visible;opacity:1}#mic-init-access-tool .mic-access-tool-box.mic-access-tool-box-right{left:auto;right:0}#mic-init-access-tool .mic-access-tool-box .mic-access-tool-box-header{position:relative;text-align:left;line-height:1.2;font-size:14px!important;font-weight:500;padding:10px;margin-bottom:25px;color:#0053a5;background:white}#mic-init-access-tool .mic-access-tool-box .mic-access-tool-box-header button{position:absolute;display:inline-block;cursor:pointer;color:#fff;font-weight:700;line-height:1.1;font-size:18px!important;right:0;top:0;padding:8px 5px 8px}#mic-init-access-tool .mic-access-tool-box .mic-access-tool-box-header button *{font-size:18px!important}#mic-init-access-tool .mic-access-tool-box .mic-access-tool-box-header button:focus,#mic-init-access-tool .mic-access-tool-box .mic-access-tool-box-header #mic-init-access-tool .mic-access-tool-box .mic-access-tool-box-header button:focus span,#mic-init-access-tool .mic-access-tool-box .mic-access-tool-box-header button:hover span{color:#8b0000}#mic-init-access-tool .mic-access-tool-box .link-access-page{background-color:#fff;position:relative;height:auto;text-align:center;max-width:96%;margin-top:10px!important;margin-bottom:20px!important}#mic-init-access-tool .mic-access-tool-box .link-access-page a{padding:10px 0;border-bottom:1px solid #777}#mic-init-access-tool .mic-access-tool-box .link-access-page *{font-size:18px!important}#mic-init-access-tool .mic-access-tool-box .link-access-page #mic-toolbox-disable-buttons-reset-all{text-align:center;font-weight:500}#mic-init-access-tool .mic-access-tool-box .link-access-page button,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button{position:relative;padding:5px 5px;border-bottom:1px solid #777;display:block;width:94%;font-size:18px!important;background-color:white;margin:auto}#mic-init-access-tool .mic-access-tool-box .link-access-page button img,#mic-init-access-tool .mic-access-tool-box .link-access-page button span,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button img,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button span{display:inline-block;vertical-align:middle;font-size:14px!important;color:#333}#mic-init-access-tool .mic-access-tool-box .link-access-page button:focus,#mic-init-access-tool .mic-access-tool-box .link-access-page button:hover,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button:focus,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button:hover{color:blue;border-color:blue;background-color:#fff!important;cursor:pointer}#mic-init-access-tool .mic-access-tool-box .link-access-page button:focus span,#mic-init-access-tool .mic-access-tool-box .link-access-page button:hover span,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button:focus span,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button:hover span{color:blue}#mic-init-access-tool .mic-access-tool-box .link-access-page button.vi-enabled,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button.vi-enabled{border:dashed 1px #8b0000;background-color:#fffff3}#mic-init-access-tool .mic-access-tool-box .link-access-page button.vi-enabled span,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button.vi-enabled span{color:blue!important;font-weight:700}#mic-init-access-tool .mic-access-tool-box .link-access-page button.vi-enabled::before,#mic-init-access-tool .mic-access-tool-box .mic-disable-buttons button.vi-enabled::before{content:"\\2713";position:absolute;top:2px;right:2px;color:#00e800;font-weight:700!important;line-height:1!important;font-size:14px!important}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block{padding-bottom:0px}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-contrast-block button span,#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-fonts-block button span{display:block;position:absolute;color:#333;width:100%;right:0}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-contrast-block button span:nth-child(1),#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-fonts-block button span:nth-child(1){top:10px}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-contrast-block button span:nth-child(2),#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-fonts-block button span:nth-child(2){bottom:5px}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-contrast-block button span:nth-child(3),#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-fonts-block button span:nth-child(3){top:2px!important;right:2px!important;color:#00e800!important;display:inline-block!important;width:auto!important;font-size:12px!important;direction:ltr!important;line-height:1!important;font-family:Barlow Semi Condensed, sans-serif}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-contrast-block button.vi-font-enabled,#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-fonts-block button.vi-font-enabled{border:dashed 1px #8b0000;background-color:#fffff3}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-contrast-block button.vi-font-enabled span,#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-fonts-block button.vi-font-enabled span{color:#8b0000}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block.mic-cursors-block button span:last-child{margin-top:10px}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button{cursor:pointer;margin:0px -3px 0px -3px;background-color:white;display:inline-block;padding:0 5px;position:relative;text-align:center;width:32%;height:80px;border:solid 1px silver;vertical-align:middle;line-height:1;font-weight:500;font-size:16px!important;border-radius:0px}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button span{background:white;display:block;font-size:10px!important;color:#333;line-height:.9!important}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button:focus,#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button:hover{color:blue;border-color:blue;background-color:#fff!important}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button:focus span,#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button:hover span{color:blue}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button.vi-enabled{border:dashed 1px #8b0000;background-color:#fffff3}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button.vi-enabled span{color:blue!important}#mic-init-access-tool .mic-access-tool-box .mic-buttons-block button.vi-enabled::before{content:"\\2713";direction:ltr!important;position:absolute;top:2px;right:2px;color:#00e800;font-weight:700;font-size:12px!important}#mic-init-access-tool .mic-access-tool-box .mic-toolbox-all-credits{position:relative!important;padding:0 5px!important;background-color:#2e53a500!important;text-align:left!important;margin:auto;width:90%;margin-bottom:5px}#mic-init-access-tool .mic-access-tool-box .mic-toolbox-all-credits a,#mic-init-access-tool .mic-access-tool-box .mic-toolbox-all-credits span{display:inline-block!important;vertical-align:middle!important;color:#fff!important;width:auto!important;font-family:Barlow Semi Condensed, sans-serif;font-weight:500!important;font-size:10px!important}#mic-init-access-tool .mic-access-tool-box .mic-toolbox-all-credits a{text-decoration:none!important}#mic-init-access-tool .mic-access-tool-box .mic-toolbox-all-credits a:focus,#mic-init-access-tool .mic-access-tool-box .mic-toolbox-all-credits a:hover{background-color:transparent!important}@media screen and (max-width:47em){#mic-init-access-tool .mic-access-tool-general-button>div span{display:none}#mic-init-access-tool .mic-disable-buttons{display:none}#mic-init-access-tool .mic-access-tool-box{width:100%}#mic-init-access-tool .mic-cursors-block{display:none}}body.mic-toolbox-zoom-up>:not(#mic-init-access-tool){zoom:2.4!important;-moz-transform:scale(2.4)!important;-moz-transform-origin:40% 0!important}body.mic-toolbox-contrast-monochrome>:not(#mic-init-access-tool){-webkit-filter:grayscale(1)!important;filter:grayscale(1)!important}body.mic-toolbox-contrast-soft,body.mic-toolbox-contrast-soft>:not(#mic-init-access-tool),body.mic-toolbox-contrast-soft>:not(#mic-init-access-tool) :not(img){color:#000!important;background:0 0!important}body.mic-toolbox-contrast-hard>:not(#mic-init-access-tool){background-color:#fff!important;color:#000!important;-webkit-filter:invert(100%)!important;filter:invert(100%)!important}body.mic-toolbox-disable-buttons-animations *{-webkit-transition-property:none!important;transition-property:none!important;-webkit-animation:none!important;animation:none!important;-webkit-animation-name:none!important;animation-name:none!important}body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) a:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) button:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) h1:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) h2:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) h3:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) h4:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) h5:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) h6:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) input:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) li:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) p:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) select:focus,body.mic-toolbox-disable-buttons-keyboard>:not(#mic-init-access-tool) textarea:focus{outline:0!important;background:white!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important}body.mic-toolbox-fonts-simple :not(i):not(.fa){font-family:Barlow Semi Condensed, sans-serif}body.mic-toolbox-content-links a{text-decoration:underline!important}body.mic-toolbox-content-headers h1,body.mic-toolbox-content-headers h2,body.mic-toolbox-content-headers h3,body.mic-toolbox-content-headers h4,body.mic-toolbox-content-headers h5,body.mic-toolbox-content-headers h6{text-decoration:underline!important}span#ul{padding:6px}body.mic-toolbox-cursor-big-white{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAzCAYAAAAZ+mH/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDA1OTE2NURCQzkyMTFFN0IwODJCQjE5QzZFMDg2QjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDA1OTE2NUVCQzkyMTFFN0IwODJCQjE5QzZFMDg2QjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMDU5MTY1QkJDOTIxMUU3QjA4MkJCMTlDNkUwODZCNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMDU5MTY1Q0JDOTIxMUU3QjA4MkJCMTlDNkUwODZCNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Phwph8YAAAWrSURBVHjavFldSGxVFF7zq+N4/RtTuY1SU2SWoqUW/iAZhL1UFD4kVBD02Jv45os/+Psi+CCU9hRYkGVF1kOUmEYZpmGJEpqJ4Ev5e/XqzDi7tU5rz92zx7nqzBwXfBxn73P2/va311pnnS0AwDuI3xG34H9zIGwMC8NUsyIOEU8iphAexDnCzn2mE5AkrPx3PRPJZiJSEavZiqgkyJ5BfInIQQSZiOmKXDRBDSuSc1OKxFplJWISkasQMU2RiIF9Ph+kpqbKn88ivmAiIYTTLEVUfzAIeL1ecLlcsulpxKdmKxIxYFpaGrS0tEBOTg44nU7VWT83W5G3EIJQWVkpyAYGBkRBQYFAZYTsQ/yM8JJgxDfZqoRJVFRUiGAwaBDp6uoS+fn5AhVRiSwoRNxK5CSsSAQJv98vpPX19Ym8vLwbUSQmiZtU5L4kVEVSUlJMU+RSElKR3Nxc4XA4TFHkSiTIent7hcfjMUWRK5OQihCRZCtyLRJmKXJtElIRzKxJUyQuElKR7OxsPXzjUiRuEmSdnZ0GkUQVSYhEshRJmIRUJCsrK25FkkKCrKenR2RmZsalSNJIkHV0dIiMjAxht9uvpUhSScSrSNJJXKLIgxoRm2kkyPr7+w0imiI/MZEUScSeSCESCoXg9PQULJboqKO21tZW2Nvbg7GxMeOKVZtaxb+E+DdhEoeHh1BbWwv7+/sxidhsNkB14fz8XO2SVfxrRORKJI6OjoyJsPgFzAPhdrfbbUyws7MTzxqkIq9YL7uzu7sbsAqHkpISWFpaitqOsrIyQOeLV0z60hu779PoWDA8PAy7u7uGnFjmwcTERLgfX+XQ1tYGk5OThvToi9T8B+JDzgdB/lYJ8ceT/DvIvwOI7SgSVqs1rAARoG1gh4KFhQWYnZ2F+vr6yOWgUouLi5IE2TziH46GAE94rhChq5/7QhHbQU5EGBwchKGhITg4ODD2XNrW1haMj49HECDHbGxsNJ5jowOXF3i1enq2cJuNv+RSOVfcyxNVVVWivb39ooI2jObmZrG9vR2RD3C7RGFhoXrfPqIC8RjiIcRtRB5/Snr42IGQhUgnRuWIV4kNJhaYn583YlpVAO2uZLyysgINDQ1QXFwcDkvyDdqy6elpw1k5EZ0hvmf5z1j6gOIPQcVn7ilB3xZadiN8gHhZ/qb+8vLyqOw4MzNj9KNPyee+46On23x1MzknL8jBZ2P2CCWOj4/VpLKMGER8hjhA0HlBOfXTyskJa2pqIhLTxsYGrK6uhtMI4hfEX+wLAc05Q3JhsfIEhdm7iK/5YUqvi6qD0oSqFRUVQVNTE2AVLpvIB15n59MdVFcb3tQafuVzK/LyUkQx4mHEUwhapsBVi9LSUrG8vBy1LT6fz+hXxitmQrd4O2x6QaMr8RvibY5xku2YQV76J+ITkpG2Ym1tDaampiAQCIQfPjk5gerqasPB2fycngXvvy1WjfmGUnQ8TsoiHuVrgRJSHn4F79L9FMK0at0wmYn09HRVjTlW4gEKR3bMiO0hZnWIR/jVesRee8bwK2FFA95hvEihSMdKlC3JH1TfoCw7Nzcnmyg61tmnbJpTGkYSzSC+ReyxR9/lmwJKLAO3+fk+2irb+vo6jI6OQl1dHZydncHIyAhsbm4a+UJNxIhMmWeUA1yhErGyRJmcwTJYNpd22O5kkuTtP8icQNkV07yRbb1e74VZlsk/weO7lS0Jm1Op+dJ48hStELWyai5Gs5zA5XIZH8daRKggZd/jbfFofhEhl13LYvq/GiyKYum8oh9jTCoU//kK8TyHuJffHVFK2Hmv9bAR2hUUvwjxvyfe53yiP0eVz0cc5tM8oUV5Xwh9XHuMyWKZ4MFoFX8zGZkUyME/5lrijqx7tEiTL6+I+a57yCVrAQcP+BznFLJvlC1Vixa/gqDy/ggr8p8AAwB38ep+f+/fmwAAAABJRU5ErkJggg==),url(https://raw.githubusercontent.com/louis2688/Accessibility-Widget/master/app/cursors/w2.cur),auto!important}body.mic-toolbox-cursor-big-white a,body.mic-toolbox-cursor-big-white button{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAtCAYAAAAz8ULgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkE0QzFBMjdCQzkyMTFFNzg4RDE5NkYzNkM0MDkwNzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkE0QzFBMjhCQzkyMTFFNzg4RDE5NkYzNkM0MDkwNzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQTRDMUEyNUJDOTIxMUU3ODhEMTk2RjM2QzQwOTA3MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQTRDMUEyNkJDOTIxMUU3ODhEMTk2RjM2QzQwOTA3MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnfOpO8AAAhdSURBVHjaxFlpTBVX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),url(https://raw.githubusercontent.com/louis2688/Accessibility-Widget/master/app/cursors/wh2.cur),auto!important}body.mic-toolbox-cursor-big-black{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAzCAYAAAAZ+mH/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODM1RTg1NDJCQzhFMTFFNzhFNDdGMzY5NjY0M0JBMTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODM1RTg1NDNCQzhFMTFFNzhFNDdGMzY5NjY0M0JBMTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MzVFODU0MEJDOEUxMUU3OEU0N0YzNjk2NjQzQkExNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MzVFODU0MUJDOEUxMUU3OEU0N0YzNjk2NjQzQkExNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PisYaokAAAcASURBVHjavFhrTFRH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),url(https://raw.githubusercontent.com/louis2688/Accessibility-Widget/master/app/cursors/b2.cur),auto!important}body.mic-toolbox-cursor-big-black a,body.mic-toolbox-cursor-big-black button{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA1CAYAAAADOrgJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUIxMTcwRTBCQTVCMTFFNzlFMTNDNDI4RjQ5NjYzNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUIxMTcwRTFCQTVCMTFFNzlFMTNDNDI4RjQ5NjYzNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QjExNzBERUJBNUIxMUU3OUUxM0M0MjhGNDk2NjM0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QjExNzBERkJBNUIxMUU3OUUxM0M0MjhGNDk2NjM0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsArU6kAAAuPSURBVHjazFoJcE1L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),url(https://raw.githubusercontent.com/louis2688/Accessibility-Widget/master/app/cursors/bh2.cur),auto!important}  body.mic-toolbox-big-cursor{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDctMDVUMDk6MzQ6NDItMTA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTA1VDEwOjI4OjUyLTEwOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTA1VDEwOjI4OjUyLTEwOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRiZGViNDk0LTU5YTAtNGQ5YS1iYmQ2LTgxNTA0Yjg5MmI4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0YmRlYjQ5NC01OWEwLTRkOWEtYmJkNi04MTUwNGI4OTJiODIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YmRlYjQ5NC01OWEwLTRkOWEtYmJkNi04MTUwNGI4OTJiODIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRiZGViNDk0LTU5YTAtNGQ5YS1iYmQ2LTgxNTA0Yjg5MmI4MiIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0wNVQwOTozNDo0Mi0xMDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YGmfrAAAAoFJREFUWIXN2EFymzAUgOHfnR7AR3BPUHfLyl6xdU5QMjpA7RO0PkGcfZnQEyRdsrJXbENPEPcE9Q3ogiejytgIEHbfTMZCI5gv6EkPGBVFwX8VRVHU/gWhmgWherq25V3DmOjaqCYQCCoI1XhoDLiBACJgew2UKwhgyhVQbUBQoSb+KWW4glZALu0p8BqEajqAxxmUA3Mq1JjyTk1vBSJL48MZ1OImIAv1YqCeg1BFNwFpVJbGd0BidD/5QrUG6cjS+J5T1MPNQHBErYyuZd9S0wsEkKXxBrg3unrVv94ggCyNE05RnXZ1LyADNQcO0jWjQ6nxBhLUzkJN26K8ggSV16DeXHd17yAD9YEOpWYQkKAOdKh/g4EuoF4v7eqDgjQqS+NPOJaawUE6zpSapT3u/ZAIyZex0fWLcvXpvocgVB8F6x8kxXXZ8rQoCJW+g/2mLAjV2Hq+/tnxUpHOqc53SKbjGdghdSxL410QqpxyM4QyZ35LO6faLAFyWYVGfO8GEsyWMhcWQahWxsUfgWO1z9L4W5trt54yC4P8RgYgAfZyGLV9ZWoFqsHo+GId/zDa0SCgGkxO9bA/sTa6DVW+2FgvoJmF2VGWhEdjzGfdkHx6kcNxmxcAV9BXA5NkaTyXkrATHMDMKpxr63yvIB2JuatKmPlynJ4sjfdU2EkQqplvUB2maVWZd8kpl1xBtRgjaleVTOleDhcuW4ALqAkD1qrSz9DymxvjGnOpCbR2wJysKqoXxj/AwhhqtmtjdO6z8Gg0ajr3n5DpeLswJKH8B/fnBhRF4Q8kqC3lnqVjT5lfm9NCWg/y/YC2FlAOPMoKbBfnPpx3jT5f1S5O2a3iLzPTPGHgEXw6AAAAAElFTkSuQmCC),url(https://raw.githubusercontent.com/louis2688/Accessibility-Widget/master/app/cursors/bc.cur),auto!important}body.mic-toolbox-big-cursor a,body.mic-toolbox-big-cursor button{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAsCAYAAAANUxr1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDctMDVUMDk6MzQ6NDItMTA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA3LTA1VDEwOjI4OjUyLTEwOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA3LTA1VDEwOjI4OjUyLTEwOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRiZGViNDk0LTU5YTAtNGQ5YS1iYmQ2LTgxNTA0Yjg5MmI4MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0YmRlYjQ5NC01OWEwLTRkOWEtYmJkNi04MTUwNGI4OTJiODIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0YmRlYjQ5NC01OWEwLTRkOWEtYmJkNi04MTUwNGI4OTJiODIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRiZGViNDk0LTU5YTAtNGQ5YS1iYmQ2LTgxNTA0Yjg5MmI4MiIgc3RFdnQ6d2hlbj0iMjAxOS0wNy0wNVQwOTozNDo0Mi0xMDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YGmfrAAAAoFJREFUWIXN2EFymzAUgOHfnR7AR3BPUHfLyl6xdU5QMjpA7RO0PkGcfZnQEyRdsrJXbENPEPcE9Q3ogiejytgIEHbfTMZCI5gv6EkPGBVFwX8VRVHU/gWhmgWherq25V3DmOjaqCYQCCoI1XhoDLiBACJgew2UKwhgyhVQbUBQoSb+KWW4glZALu0p8BqEajqAxxmUA3Mq1JjyTk1vBSJL48MZ1OImIAv1YqCeg1BFNwFpVJbGd0BidD/5QrUG6cjS+J5T1MPNQHBErYyuZd9S0wsEkKXxBrg3unrVv94ggCyNE05RnXZ1LyADNQcO0jWjQ6nxBhLUzkJN26K8ggSV16DeXHd17yAD9YEOpWYQkKAOdKh/g4EuoF4v7eqDgjQqS+NPOJaawUE6zpSapT3u/ZAIyZex0fWLcvXpvocgVB8F6x8kxXXZ8rQoCJW+g/2mLAjV2Hq+/tnxUpHOqc53SKbjGdghdSxL410QqpxyM4QyZ35LO6faLAFyWYVGfO8GEsyWMhcWQahWxsUfgWO1z9L4W5trt54yC4P8RgYgAfZyGLV9ZWoFqsHo+GId/zDa0SCgGkxO9bA/sTa6DVW+2FgvoJmF2VGWhEdjzGfdkHx6kcNxmxcAV9BXA5NkaTyXkrATHMDMKpxr63yvIB2JuatKmPlynJ4sjfdU2EkQqplvUB2maVWZd8kpl1xBtRgjaleVTOleDhcuW4ALqAkD1qrSz9DymxvjGnOpCbR2wJysKqoXxj/AwhhqtmtjdO6z8Gg0ajr3n5DpeLswJKH8B/fnBhRF4Q8kqC3lnqVjT5lfm9NCWg/y/YC2FlAOPMoKbBfnPpx3jT5f1S5O2a3iLzPTPGHgEXw6AAAAAElFTkSuQmCC),url(https://raw.githubusercontent.com/louis2688/Accessibility-Widget/master/app/cursors/bc.cur),auto!important}  body.mic-toolbox-content-images span.mic-toolbox-images-titles{display:block!important;font-size:20px!important;max-width:180px!important;line-height:1!important;margin:0 auto!important;font-weight:400!important;text-align:center!important;background:#ffffe0!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;padding:10px!important;border:solid 1px #8b0000!important;border-radius:0!important}'),
      document.head.appendChild(t);
    var i = document.createElement("div");
    (i.id = "mic-init-access-tool"),
      (i.innerHTML = A),
      document.body.insertBefore(i, document.body.firstChild);
  }),
  (MicAccessTool.prototype.contrastChange = function(o) {
    if ((o.preventDefault(), document.body.classList.contains(this.id)))
      this.classList.remove("vi-enabled"),
        document.body.classList.remove(this.id),
        delete window.MICTOOLBOXAPPSTATE.bodyClassList[this.id];
    else {
      for (
        var A = document.querySelectorAll(".mic-contrast-block button"), t = 0;
        t < A.length;
        t++
      )
        A[t].classList.remove("vi-enabled"),
          document.body.classList.remove(A[t].id),
          delete window.MICTOOLBOXAPPSTATE.bodyClassList[A[t].id];
      this.classList.add("vi-enabled"),
        document.body.classList.add(this.id),
        (window.MICTOOLBOXAPPSTATE.bodyClassList[this.id] = this.id);
    }
    MicAccessTool.prototype.updateState();
  }),
  (MicAccessTool.prototype.cursorChange = function(o) {
    if ((o.preventDefault(), document.body.classList.contains(this.id)))
      this.classList.remove("vi-enabled"),
        document.body.classList.remove(this.id),
        delete window.MICTOOLBOXAPPSTATE.bodyClassList[this.id];
    else {
      for (
        var A = document.querySelectorAll(
            "#mic-toolbox-cursor-big-black,#mic-toolbox-cursor-big-white,#mic-toolbox-big-cursor"
          ),
          t = 0;
        t < A.length;
        t++
      )
        A[t].classList.remove("vi-enabled"),
          document.body.classList.remove(A[t].id),
          delete window.MICTOOLBOXAPPSTATE.bodyClassList[A[t].id];
      this.classList.add("vi-enabled"),
        document.body.classList.add(this.id),
        (window.MICTOOLBOXAPPSTATE.bodyClassList[this.id] = this.id);
    }
  }),
  (MicAccessTool.prototype.onceButtonChange = function(o) {
    o.preventDefault(),
      "mic-toolbox-disable-buttons-keyboard" === this.id &&
        ((window.MICTOOLBOXAPPSTATE.keyboardRoot = !window.MICTOOLBOXAPPSTATE
          .keyboardRoot),
        MicAccessTool.prototype.keyboardRootEnable()),
      "mic-toolbox-content-images" === this.id &&
        MicAccessTool.prototype.imagesChange(),
      document.body.classList.contains(this.id)
        ? (this.classList.remove("vi-enabled"),
          document.body.classList.remove(this.id),
          delete window.MICTOOLBOXAPPSTATE.bodyClassList[this.id])
        : (this.classList.add("vi-enabled"),
          document.body.classList.add(this.id),
          (window.MICTOOLBOXAPPSTATE.bodyClassList[this.id] = this.id)),
      MicAccessTool.prototype.updateState();
  }),
  (MicAccessTool.prototype.onceButtonChangeReadPage = function(o) {
    o.preventDefault();

    responsiveVoice.cancel();

    clearTimeout(window.speakTimeout);

    var button = document.getElementById("mic-toolbox-fonts-simple");

    var isEnabled = button.classList.contains("vi-enabled");

    if (isEnabled) {
      document.removeEventListener("mouseup", mouseUpEventListener);
      button.classList.remove("vi-enabled");
    } else {
      document.addEventListener("mouseup", mouseUpEventListener);
      button.classList.add("vi-enabled");
    }

    function mouseUpEventListener() {
      responsiveVoice.cancel();

      clearTimeout(window.speakTimeout);

      var button = document.getElementById("mic-toolbox-fonts-simple");

      var isEnabled = button.classList.contains("vi-enabled");

      var text = getSelectionText();

      if (isEnabled && text) {
        window.speakTimeout = setTimeout(function() {
          responsiveVoice.speak(text); //speak the text as returned by getSelectionText
        });
      }
    }

    function getSelectionText() {
      var text = "";
      if (window.getSelection) {
        text = window.getSelection().toString();
        // for Internet Explorer 8 and below. For Blogger, you should use &amp;&amp; instead of &&.
      } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
      }
      return text;
    }
  }),
  (MicAccessTool.prototype.keyboardRootEnable = function() {
    if (window.MICTOOLBOXAPPSTATE.keyboardRoot)
      for (
        var o = document.querySelectorAll(
            "h1,h2,h3,h4,h5,h6,p,a,button,input,select,textarea"
          ),
          A = 0;
        A < o.length;
        A++
      ) {
        o[A].tabIndex = A + 1;
      }
    else window.location.reload();
  }),
  (MicAccessTool.prototype.fontsChange = function(o) {
    o.preventDefault();
    var A = window.MICTOOLBOXAPPSTATE.fontSize;
    if ("mic-toolbox-fonts-up" === this.id) {
      if (1.6 <= A) return;
      for (
        var t = document.querySelectorAll(
            "body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"
          ),
          i = 0;
        i < t.length;
        i++
      ) {
        var e = t[i],
          c = window
            .getComputedStyle(e)
            .getPropertyValue("font-size")
            .split("px"),
          n = Number(c[0]);
        e.style.fontSize = (1.1 * n).toFixed() + "px";
      }
      A = (1.1 * A).toFixed(2);
    }
    if ("mic-toolbox-fonts-down" === this.id) {
      if (A <= 1)
        return (
          (window.MICTOOLBOXAPPSTATE.fontSize = 1),
          void MicAccessTool.prototype.updateState()
        );
      for (
        t = document.querySelectorAll(
          "body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"
        ),
          i = 0;
        i < t.length;
        i++
      ) {
        (e = t[i]),
          (c = window
            .getComputedStyle(e)
            .getPropertyValue("font-size")
            .split("px")),
          (n = Number(c[0]));
        e.style.fontSize = (n / 1.1).toFixed() + "px";
      }
      A = (A / 1.1).toFixed(2);
    }
    (window.MICTOOLBOXAPPSTATE.fontSize = A),
      MicAccessTool.prototype.getFontsChanges(A),
      MicAccessTool.prototype.updateState();
  }),
  (MicAccessTool.prototype.initFontsChange = function() {
    for (
      var o = document.querySelectorAll(
          "body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"
        ),
        A = window.MICTOOLBOXAPPSTATE.fontSize,
        t = 0;
      t < o.length;
      t++
    ) {
      var i = o[t],
        e = window.getComputedStyle(i).getPropertyValue("font-size");
      i.style.fontSize = e;
      var c = i.style.fontSize.split("px");
    }
    for (t = 0; t < o.length; t++) {
      (i = o[t]),
        (e = window
          .getComputedStyle(i)
          .getPropertyValue("font-size")
          .split("px")),
        (c = Number(e[0]));
      i.style.fontSize = (c * A).toFixed() + "px";
    }
    A && this.getFontsChanges(A);
  }),
  (MicAccessTool.prototype.initFontsChangeFirst = function() {
    for (
      var o = document.querySelectorAll(
          "body,h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,li,td,th,strong,span,blockquote,div"
        ),
        A = 0;
      A < o.length;
      A++
    ) {
      var t = o[A],
        i = window.getComputedStyle(t).getPropertyValue("font-size");
      t.style.fontSize = i;
      t.style.fontSize.split("px");
    }
  }),
  (MicAccessTool.prototype.getFontsChanges = function(o) {
    if (1 < o) {
      document
        .getElementById("mic-toolbox-fonts-up")
        .classList.add("vi-font-enabled");
      var A = "+" + (100 * Number(o) - 100).toFixed() + "%";
      document.getElementById("mic-toolbox-fonts-up-enabled").textContent = A;
    } else
      document
        .getElementById("mic-toolbox-fonts-up")
        .classList.remove("vi-font-enabled"),
        (document.getElementById("mic-toolbox-fonts-up-enabled").textContent =
          "");
  }),
  (MicAccessTool.prototype.imagesChange = function() {
    if (document.body.classList.contains("mic-toolbox-content-images")) {
      for (
        var o = document.querySelectorAll(".mic-toolbox-images-titles"), A = 0;
        A < o.length;
        A++
      ) {
        o[A].parentElement.removeChild(o[A]);
      }
      window.MICTOOLBOXAPPSTATE.imagesTitle = !1;
    } else this.imagesAddTitles(), (window.MICTOOLBOXAPPSTATE.imagesTitle = !0);
  }),
  (MicAccessTool.prototype.imagesAddTitles = function() {
    for (var o = document.images, A = 0; A < o.length; A++) {
      var t,
        i = o[A];
      if (i.alt)
        ((t = document.createElement("span")).className =
          "mic-toolbox-images-titles"),
          (t.textContent = i.alt),
          i.parentNode.insertBefore(t, i);
      else
        ((t = document.createElement("span")).className =
          "mic-toolbox-images-titles"),
          (t.textContent = "image without text"),
          i.parentNode.insertBefore(t, i);
    }
  }),
  (MicAccessTool.prototype.updateState = function() {
    var o = JSON.stringify(window.MICTOOLBOXAPPSTATE);
    "undefined" != typeof Storage
      ? localStorage.setItem("MICTOOLBOXAPPSTATE", o)
      : console.log("No Storage Found");
  }),
  (MicAccessTool.prototype.openBox = function(o) {
    this.toolBox.classList.add("opened-mic-access-tool"),
      (!window.MICTOOLBOXAPPSTATE.initFontSize ||
        window.MICTOOLBOXAPPSTATE.fontSize <= 1) &&
        (this.initFontsChangeFirst(),
        (window.MICTOOLBOXAPPSTATE.initFontSize = !0)),
      this.toolBoxCloseButton.focus();
  }),
  (MicAccessTool.prototype.closeBox = function(o) {
    this.toolBox.classList.remove("opened-mic-access-tool");
  }),
  (MicAccessTool.prototype.openCloseBoxKeyboard = function(o) {
    27 == o.keyCode && this.closeBox(),
      o.ctrlKey && 113 == o.keyCode && this.openBox();
  }),
  (MicAccessTool.prototype.resetApp = function(o) {
    localStorage.removeItem("MICTOOLBOXAPPSTATE"), window.location.reload();
  }),
  (MicAccessTool.prototype.initialApp = function() {
    if (
      ((window.MICTOOLBOXAPPSTATE = JSON.parse(
        localStorage.getItem("MICTOOLBOXAPPSTATE")
      ) || {
        bodyClassList: {},
        fontSize: 1,
        imagesTitle: !1,
        keyboardRoot: !1,
        initFontSize: !1
      }),
      window.MICTOOLBOXAPPSTATE.bodyClassList)
    )
      for (var o in window.MICTOOLBOXAPPSTATE.bodyClassList) {
        var A = window.MICTOOLBOXAPPSTATE.bodyClassList[o],
          t = document.getElementById(A);
        t && t.classList.add("vi-enabled"), document.body.classList.add(A);
      }
    (1 < window.MICTOOLBOXAPPSTATE.fontSize && this.initFontsChange(),
    window.MICTOOLBOXAPPSTATE.imagesTitle && this.imagesAddTitles(),
    window.MICTOOLBOXAPPSTATE.keyboardRoot && this.keyboardRootEnable(),
    !window.MSInputMethodContext || !document.documentMode) ||
      (document.getElementById("mic-toolbox-contrast-block").style.display =
        "none");
    if (this.init.link) {
      var i = document.getElementById("mic-toolbox-link-nagishut") || {};
      i.classList.remove("atb-hide-if-empty"), (i.href = this.init.link);
    }
    if (this.init.contact) {
      var e = document.getElementById("mic-toolbox-link-contact") || {};
      e.classList.remove("atb-hide-if-empty"), (e.href = this.init.contact);
    }
    "right" === this.init.buttonPosition &&
      (document
        .getElementById("mic-access-tool-general-button")
        .classList.add("mic-access-tool-general-button-right"),
      document
        .getElementById("mic-access-tool-box")
        .classList.add("mic-access-tool-box-right"));
  }),
  (window.onload = function() {
    window.micAccessTool = new MicAccessTool();
  });

function getCurrentDate() {
  var newDate = new Date();
  var fullYear = newDate.getFullYear();
  var month = newDate.getMonth();
  var day = newDate.getDate();
  var currentDate = new Date(fullYear, month, day).getTime().toString();

  return currentDate;
}

function setLoggedDate() {
  var currentDate = getCurrentDate();
  window.localStorage.setItem("loggedDate", currentDate);
}

function sendLogAjax(website, callback) {
  var xhttp = new XMLHttpRequest();
  var data = JSON.stringify({website});
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callback();
    }
  };
  xhttp.open("POST", "https://server.adally.com/api/save/widget-logs", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(data);
}

function sendLog() {
  var loggedDate = window.localStorage.getItem("loggedDate");
  var currentDate = getCurrentDate();
  
  if(!loggedDate) { 
    var websiteProtocol = window.location.protocol;
    var websiteHost = window.location.hostname;
    var website = `${websiteProtocol}//${websiteHost}`;
    sendLogAjax(website, setLoggedDate);
  }
}

function appendResponsiveVoice() {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "//code.responsivevoice.org/responsivevoice.js";
  head.appendChild(script);

  sendLog();
}

appendResponsiveVoice();
