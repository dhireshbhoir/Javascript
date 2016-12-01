function calculate(oper) {
                var a=Number(document.cal.num1.value);
                var b=Number(document.cal.num2.value);
            switch(oper) {   //switch case statement
                case "add":
                var c=a+b;
                break;
                case "sub":
                var c=a-b;
                break;
                case "mul":
                var c=a*b;
                break;
                case "div":
                var c=a/b;
                break;
            }
            document.cal.res.value=c;
        }
