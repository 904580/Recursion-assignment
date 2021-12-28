const Balanced = (exp) =>{
    let stack =[];
    for (let i = 0; i < expr.length; i++)
    {
        let x = expr [i];
        if ( x == '(')
        {
            stack.push (x);
            continue;
        }
        if (stack. length == 0)
        return false;


        let check ;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check !== '(')
                return false;
                break;

        }
    }
    return  (stack.length  == 0);
}
let expr = ['(', '(', ')', ')']
 if (Balanced(expr))
 console.log ("given Array is Balanced");
 else
 console.log (" given Array is not  Balanced");

