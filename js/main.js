

    function matrix() {
    var c = document.getElementById("c");
    var ctx = c.getContext("2d");

//making the canvas full screen
    c.height = window.innerHeight ;
    c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
    var chinese = "nerdakademie";
//converting the string into an array of single characters
    chinese = chinese.split("");

    var font_size = 10;
    var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
    var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++)
        drops[x] = 1;

//drawing the characters
    function draw() {
        //Black BG for the canvas
        //translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#0F0"; //green text
        ctx.font = font_size + "px arial";
        //looping over drops
        for (var i = 0; i < drops.length; i++) {
            //a random chinese character to print
            var text = chinese[Math.floor(Math.random() * chinese.length)];
            //x = i*font_size, y = value of drops[i]*font_size
            ctx.fillText(text, i * font_size, drops[i] * font_size);

            //sending the drop back to the top randomly after it has crossed the screen
            //adding a randomness to the reset to make the drops scattered on the Y axis
            if (drops[i] * font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            //incrementing Y coordinate
            drops[i]++;
        }
    }

    setInterval(draw, 33);
}


    var repeat = function (text, num) {
        return new Array(num + 1).join(text);
    }

    window.onload = function () {
        matrix();
        dostoy.init({
            font: window.atob("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AAAYGBgYGBgY/wAAAAAAAAAAAAAAAAD/GBgYGBgYGBgYGBgYGB8YGBgYGBgAAAAAAAAA/wAAAAAAABgYGBgYGBj/GBgYGBgYGBgYGBgfGB8YGBgYGBg2NjY2NjY2NzY2NjY2NjY2NjY2NzA/AAAAAAAAAAAAAAA/MDc2NjY2NjY2NjY2NvcA/wAAAAAAAAAAAAAA/wD3NjY2NjY2NjY2NjY3MDc2NjY2NjYAAAAAAP8A/wAAAAAAADY2NjY29wD3NjY2NjY2GBgYGBj/AP8AAAAAAAA2NjY2NjY2/wAAAAAAAAAAAAAA/wD/GBgYGBgYAAAAAAAAAP82NjY2NjY2NjY2NjY2PwAAAAAAABgYGBgYHxgfAAAAAAAAAAAAAAAfGB8YGBgYGBgAAAAAAAAAPzY2NjY2NjY2NjY2Njb/NjY2NjY2GBgYGBj/GP8YGBgYGBgYGBgYGBgY+AAAAAAAAAAAAAAAAAAfGBgYGBgY//////////////////8AAAAAAAAA//////////Dw8PDw8PDw8PDw8PDwDw8PDw8PDw8PDw8PDw//////////AAAAAAAAAAAAAAAAdtzY2Nx2AAAAAAAAAHzG/MbG/MDAQAAAAP7GxsDAwMDAwAAAAAAAAAD+bGxsbGxsAAAAAAD+xmAwGDBgxv4AAAAAAAAAAH7Y2NjYcAAAAAAAAABmZmZmfGBgwAAAAAAAAHbcGBgYGBgAAAAAAH4YPGZmZjwYfgAAAAAAOGzGxv7Gxmw4AAAAAAA4bMbGxmxsbO4AAAAAAB4wGAw+ZmZmPAAAAAAAAAAAftvbfgAAAAAAAAADBn7b2/N+YMAAAAAAABwwYGB8YGAwHAAAAAAAAHzGxsbGxsbGAAAAAAAA/gAA/gAA/gAAAAAAAAAYGH4YGAAA/wAAAAAAMBgMBgwYMAB+AAAAAAAMGDBgMBgMAH4AAAAAAA4bGxgYGBgYGBgYGBgYGBgYGBgY2NhwAAAAAAAAGBgAfgAYGAAAAAAAAAAAdtwAdtwAAAAAAAA4bGw4AAAAAAAAAAAAAAAAAAAAGBgAAAAAAAAAAAAAAAAAGAAAAAAAAAAPDAwMDAzsbDwcAAAAANhsbGxsbAAAAAAAAAAAcNgwYMj4AAAAAAAAAAAAAAB8fHx8fHwAAAAAAAAAAAAAAAAAAAAAAAA="),
            fontHeight: 14,
            canvas: document.getElementById("viewPort"),
            shell: true,
            beforeShell: function () {
                dostoy.color(6, 15);
                dostoy.println(dostoy.chr("201" + repeat(",205", 34) + ",187"));
                dostoy.println(dostoy.chr("186") + "           Nerdakademie           " + dostoy.chr("186"));
                dostoy.println(dostoy.chr("200" + repeat(",205", 34) + ",188"));
                dostoy.color(0, 7);
                dostoy.println();
            },
            prompt: "C:\\",
            commandHandler: function (command) {
                var rootCommand = command.split(" ");

                switch (rootCommand[0]) {
                    case "clear":
                        dostoy.cls();
                        break;
                    case "dir":
                        dostoy.println("contact.exe")
                        dostoy.println("getsource.exe")
                        dostoy.println();

                        break;
                    case "contact":
                    case "contact.exe":
                        dostoy.println("email here.");
                        break;
                    case "getsource":
                    case "getsource.exe":
                        dostoy.setCursor(false);
                        dostoy.setPrompt("");
                        dostoy.println(" Redirecting ...");
                        window.location = "https://github.com/nerdakademie/nerdakademie.github.io";
                        break;

                    default:
                        dostoy.println("Bad command or filename")

                }

            }
        });
    };
    window.onunload = function () {
        location.reload();
    }

    document.getElementById("viewPort").addEventListener("click", function (evt) {
        document.getElementById("mobileInput").focus();
    });
