type JoinStrArray<Arr extends string[], Separator extends string, Result extends string = ""> = Arr extends [infer first, ...infer res] ?
    `${first extends string ? first : ''}${res extends [string, ...string[]] ? `${Separator}${JoinStrArray<res, Separator>}` : ''}` : '';

// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"