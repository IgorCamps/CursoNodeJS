function recursiva(max) {
    console.log(max);
    if (max >= 1000000000) return;
    max++;
    recursiva(max);
}
recursiva(0);