function recursion (num) {
    console.log(num)
    if (num > 0) {
        recursion(num - 1)
    }
}

recursion(5)