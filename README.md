# spentcut

WEB ფინალური პროექტი

## Project Summary

- <b>სათაური</b>: SpentCut
- <b>აღწერა</b>: ფინანსური ტრანზაქციების მაკონტროლებელი/გასაანალიზებელი პროგრამა
- <b>API</b>:  [fintech.ge/api](fintech.ge/api) (doesn't apply, so used my own data)

## Features

* ავტორიზაციის გვერდი
    * შესვლა ინტერნეტ-ბანკის მონაცემებით

* შემოსავლის/გასავალის გაანალიზება დროის და კატეგორიის მიხედვით
    * და-edit-ების ღილაკი (პროფილის) 
    * თვის არჩევა (ვიზუალიზაცია გრაფებით)
    * თითო კატეგორიის არჩევა (ვიზუალიზაცია გრაფებით)
    * რამდენი დარჩა/გადასცილდა თვიური ხარჯის ლიმიტს
    * cash-ით გამოტანილი თანხის "ხელით" შეყვანის ღილაკი

* cash-ის შეყვანის ღილაკი (ფოფაფი)
    * თანხის ოდენობა
    * კატეგორია
    * თვე

* და-edit-ების გვერდი
    * იუზერის სახელი და გვარი
    * თვიური თანხის ლიმიტის შეცვლა

* ტრანზაქციის შესახებ ფანჯარა
    * ოდენობა
    * კატეგორია
    * რამდენი დარჩა/გადასცილდა ამ კატეგორიის ლიმიტს


## API

 1) [მომხმარებლის ავტორიზაციისთვის მონაცემები](https://api.fintech.ge/Help/Api/GET-api-Clients-Login-username-password)
 2) [მომხმარებლის ტრანზაქციები](https://api.fintech.ge/Help/Api/GET-api-Products-Transactions-sessionId)