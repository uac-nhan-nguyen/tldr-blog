# Stuff

Link: [https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/writing-scripts/script-references/variables-list.md](https://github.com/postmanlabs/postman-docs/blob/develop/src/pages/docs/writing-scripts/script-references/variables-list.md)

| **Variable Name**                  | **Description**                                                   | **Examples**                                                                               |
|:-----------------------------------|:------------------------------------------------------------------|:-------------------------------------------------------------------------------------------|
| COMMON                             |                                                                   |                                                                                            |
| **`$guid`**                        | A `uuid-v4` style guid                                            | `"611c2e81-2ccb-42d8-9ddc-2d0bfa65c1b4"`                                                   |
| **`$timestamp`**                   | The current UNIX timestamp in seconds                             | `1562757107`, `1562757108`, `1562757109`                                                   |
| **`$isoTimestamp`**                | The current ISO timestamp at zero UTC                             | `2020-06-09T21:10:36.177Z`                                                                 |
| **`$randomUUID`**                  | A random 36-character UUID                                        | `"6929bb52-3ab2-448a-9796-d6480ecad36b"`                                                   |
| Text, numbers, and colors          |                                                                   |                                                                                            |
| **`$randomAlphaNumeric`**          | A random alpha-numeric character                                  | `6`, `"y"`, `"z"`                                                                          |
| **`$randomBoolean`**               | A random boolean value                                            | `true`, `false`                                                                            |
| **`$randomInt`**                   | A random integer between 0 and 1000                               | `802`, `494`, `200`                                                                        |
| **`$randomColor`**                 | A random color                                                    | `"red"`, `"fuchsia"`, `"grey"`                                                             |
| **`$randomHexColor`**              | A random hex value                                                | `"#47594a"`, `"#431e48"`, `"#106f21"`                                                      |
| **`$randomAbbreviation`**          | A random abbreviation                                             | `SQL`, `PCI`, `JSON`                                                                       |
| Internet and IP addresses          |                                                                   |                                                                                            |
| **`$randomIP`**                    | A random IPv4 address                                             | `241.102.234.100`, `216.7.27.38`                                                           |
| **`$randomIPV6`**                  | A random IPv6 address                                             | `dbe2:7ae6:119b:c161:1560:6dda:3a9b:90a9`                                                  |
| **`$randomMACAddress`**            | A random MAC address                                              | `33:d4:68:5f:b4:c7`, `1f:6e:db:3d:ed:fa`                                                   |
| **`$randomPassword`**              | A random 15-character alpha-numeric password                      | `t9iXe7COoDKv8k3`, `QAzNFQtvR9cg2rq`                                                       |
| **`$randomLocale`**                | A random two-letter language code (ISO 639-1)                     | `"ny"`, `"sr"`, `"si"`                                                                     |
| **`$randomUserAgent`**             | A random user agent                                               | `Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10.9.8; rv:15.6) Gecko/20100101 Firefox/15.6.6` |
| **`$randomProtocol`**              | A random internet protocol                                        | `"http"`, `"https"`                                                                        |
| **`$randomSemver`**                | A random semantic version number                                  | `7.0.5`, `2.5.8`, `6.4.9`                                                                  |
| Names                              |                                                                   |                                                                                            |
| **`$randomFirstName`**             | A random first name                                               | `Ethan`, `Chandler`, `Megane`                                                              |
| **`$randomLastName`**              | A random last name                                                | `Schaden`, `Schneider`, `Willms`                                                           |
| **`$randomFullName`**              | A random first and last name                                      | `Connie Runolfsdottir`, `Sylvan Fay`, `Jonathon Kunze`                                     |
| **`$randomNamePrefix`**            | A random name prefix                                              | `Dr.`, `Ms.`, `Mr.`                                                                        |
| **`$randomNameSuffix`**            | A random name suffix                                              | `I`, `MD`, `DDS`                                                                           |
| Profession                         |||
| **`$randomJobArea`**               | A random job area                                                 | `Mobility`, `Intranet`, `Configuration`                                                    |
| **`$randomJobDescriptor`**         | A random job descriptor                                           | `Forward`, `Corporate`, `Senior`                                                           |
| **`$randomJobTitle`**              | A random job title                                                | `International Creative Liaison`,                                                          |
| **`$randomJobType`**               | A random job type                                                 | `Supervisor`, `Manager`, `Coordinator`                                                     |
| Phone, address, and location       |||
| **`$randomPhoneNumber`**           | A random ten-digit phone number                                   | `700-008-5275`, `494-261-3424`, `662-302-7817`                                             |
| **`$randomPhoneNumberExt`**        | A random phone number with extension (12 digits)                  | `27-199-983-3864`, `99-841-448-2775`                                                       |
| **`$randomCity`**                  | A random city name                                                | `Spinkahaven`, `Korbinburgh`, `Lefflerport`                                                |
| **`$randomStreetName`**            | A random street name                                              | `Kuhic Island`, `General Street`, `Kendrick Springs`                                       |
| **`$randomStreetAddress`**         | A random street address                                           | `5742 Harvey Streets`, `47906 Wilmer Orchard`                                              |
| **`$randomCountry`**               | A random country                                                  | `Lao People's Democratic Republic`, `Kazakhstan`, `Austria`                                |
| **`$randomCountryCode`**           | A random two-letter country code (ISO 3166-1 alpha-2)             | `CV`, `MD`, `TD`                                                                           |
| **`$randomLatitude`**              | A random latitude coordinate                                      | `55.2099`, `27.3644`, `-84.7514`                                                           |
| **`$randomLongitude`**             | A random longitude coordinate                                     | `40.6609`, `171.7139`, `-159.9757`                                                         |
| Images                             |||
| **`$randomAvatarImage`**           | A random avatar image                                             |                                                                                            |
| **`$randomImageUrl`**              | A URL of a random image                                           | `http://lorempixel.com/640/480`                                                            |
| **`$randomAbstractImage`**         | A URL of a random abstract image                                  | `http://lorempixel.com/640/480/abstract`                                                   |
| **`$randomAnimalsImage`**          | A URL of a random animal image                                    | `http://lorempixel.com/640/480/animals`                                                    |
| **`$randomBusinessImage`**         | A URL of a random stock business image                            | `http://lorempixel.com/640/480/business`                                                   |
| **`$randomCatsImage`**             | A URL of a random cat image                                       | `http://lorempixel.com/640/480/cats`                                                       |
| **`$randomCityImage`**             | A URL of a random city image                                      | `http://lorempixel.com/640/480/city`                                                       |
| **`$randomFoodImage`**             | A URL of a random food image                                      | `http://lorempixel.com/640/480/food`                                                       |
| **`$randomNightlifeImage`**        | A URL of a random nightlife image                                 | `http://lorempixel.com/640/480/nightlife`                                                  |
| **`$randomFashionImage`**          | A URL of a random fashion image                                   | `http://lorempixel.com/640/480/fashion`                                                    |
| **`$randomPeopleImage`**           | A URL of a random image of a person                               | `http://lorempixel.com/640/480/people`                                                     |
| **`$randomNatureImage`**           | A URL of a random nature image                                    | `http://lorempixel.com/640/480/nature`                                                     |
| **`$randomSportsImage`**           | A URL of a random sports image                                    | `http://lorempixel.com/640/480/sports`                                                     |
| **`$randomTransportImage`**        | A URL of a random transportation image                            | `http://lorempixel.com/640/480/transport`                                                  |
| **`$randomImageDataUri`**          | A random image data URI                                           |                                                                                            |
| Finance                            |||
| **`$randomBankAccount`**           | A random 8-digit bank account number                              | `09454073`, `65653440`, `75728757`                                                         |
| **`$randomBankAccountName`**       | A random bank account name                                        | `Home Loan Account`, `Checking Account`, `Savings Account`. `Auto Loan Account`            |
| **`$randomCreditCardMask`**        | A random masked credit card number                                | `3622`, `5815`, `6257`                                                                     |
| **`$randomBankAccountBic`**        | A random BIC (Bank Identifier Code)                               | `EZIAUGJ1`, `KXCUTVJ1`, `DIVIPLL1`                                                         |
| **`$randomBankAccountIban`**       | A random 15-31 character IBAN (International Bank Account Number) | `MU20ZPUN3039684000618086155TKZ`                                                           |
| **`$randomTransactionType`**       | A random transaction type                                         | `invoice`, `payment`, `deposit`                                                            |
| **`$randomCurrencyCode`**          | A random 3-letter currency code (ISO-4217)                        | `CDF`, `ZMK`, `GNF`                                                                        |
| **`$randomCurrencyName`**          | A random currency name                                            | `CFP Franc`, `Cordoba Oro`, `Pound Sterling`                                               |
| **`$randomCurrencySymbol`**        | A random currency symbol                                          | `$`, `£`                                                                                   |
| **`$randomBitcoin`**               | A random bitcoin address                                          | `3VB8JGT7Y4Z63U68KGGKDXMLLH5`                                                              |
| Business                           |||
| **`$randomCompanyName`**           | A random company name                                             | `Johns - Kassulke`, `Grady LLC`                                                            |
| **`$randomCompanySuffix`**         | A random company suffix                                           | `Inc`, `LLC`, `Group`                                                                      |
| **`$randomBs`**                    | A random phrase of business speak                                 | `killer leverage schemas`,                                                                 |
| **`$randomBsAdjective`**           | A random business speak adjective                                 | `viral`, `24/7`, `24/365`                                                                  |
| **`$randomBsBuzz`**                | A random business speak buzzword                                  | `repurpose`, `harness`, `transition`                                                       |
| **`$randomBsNoun`**                | A random business speak noun                                      | `e-services`, `markets`, `interfaces`                                                      |
| Catchphrases                       |||
| **`$randomCatchPhrase`**           | A random catchphrase                                              | `Future-proofed heuristic open architecture`,                                              |
| **`$randomCatchPhraseAdjective`**  | A random catchphrase adjective                                    | `Self-enabling`, `Business-focused`, `Down-sized`                                          |
| **`$randomCatchPhraseDescriptor`** | A random catchphrase descriptor                                   | `bandwidth-monitored`, `needs-based`, `homogeneous`                                        |
| **`$randomCatchPhraseNoun`**       | Randomly generates a catchphrase noun                             | `secured line`, `superstructure`,`installation`                                            |
| Databases                          |||
| **`$randomDatabaseColumn`**        | A random database column name                                     | `updatedAt`, `token`, `group`                                                              |
| **`$randomDatabaseType`**          | A random database type                                            | `tinyint`, `text`                                                                          |
| **`$randomDatabaseCollation`**     | A random database collation                                       | `cp1250_bin`, `utf8_general_ci`, `cp1250_general_ci`                                       |
| **`$randomDatabaseEngine`**        | A random database engine                                          | `MyISAM`, `InnoDB`, `Memory`                                                               |
| Dates                              |||
| **`$randomDateFuture`**            | A random future datetime                                          | `Tue Mar 17 2020 13:11:50 GMT+0530 (India Standard Time)`,                                 |
| **`$randomDatePast`**              | A random past datetime                                            | `Sat Mar 02 2019 09:09:26 GMT+0530 (India Standard Time)`,                                 |
| **`$randomDateRecent`**            | A random recent datetime                                          | `Tue Jul 09 2019 23:12:37 GMT+0530 (India Standard Time)`,                                 |
| **`$randomWeekday`**               | A random weekday                                                  | `Thursday`, `Friday`, `Monday`                                                             |
| **`$randomMonth`**                 | A random month                                                    | `February`, `May`, `January`                                                               |
| Domains, emails, and usernames     |||
| **`$randomDomainName`**            | A random domain name                                              | `gracie.biz`, `armando.biz`, `trevor.info`                                                 |
| **`$randomDomainSuffix`**          | A random domain suffix                                            | `org`, `net`, `com`                                                                        |
| **`$randomDomainWord`**            | A random unqualified domain name                                  | `gwen`, `jaden`, `donnell`                                                                 |
| **`$randomEmail`**                 | A random email address                                            | `Pablo62@gmail.com`, `Ruthe42@hotmail.com`, `Iva.Kovacek61@hotmail.com`                    |
| **`$randomExampleEmail`**          | A random email address from an “example” domain                   | `Talon28@example.com`, `Quinten_Kerluke45@example.net`, `Casey81@example.net`              |
| **`$randomUserName`**              | A random username                                                 | `Jarrell.Gutkowski`, `Lottie.Smitham24`, `Alia99`                                          |
| **`$randomUrl`**                   | A random URL                                                      | `https://anais.net`, `https://tristin.net`, `http://jakob.name`                            |
| Files and directories              |||
| **`$randomFileName`**              | A random file name (includes uncommon extensions)                 | `neural_sri_lanka_rupee_gloves.gdoc`,                                                      |
| **`$randomFileType`**              | A random file type (includes uncommon file types)                 | `model`, `application`, `video`                                                            |
| **`$randomFileExt`**               | A random file extension (includes uncommon extensions)            | `war`, `book`, `fsc`                                                                       |
| **`$randomCommonFileName`**        | A random file name                                                | `well_modulated.mpg4`,                                                                     |
| **`$randomCommonFileType`**        | A random, common file type                                        | `application`, `audio`                                                                     |
| **`$randomCommonFileExt`**         | A random, common file extension                                   | `m2v`, `wav`, `png`                                                                        |
| **`$randomFilePath`**              | A random file path                                                | `/home/programming_chicken.cpio`,                                                          |
| **`$randomDirectoryPath`**         | A random directory path                                           | `/usr/bin`, `/root`, `/usr/local/bin`                                                      |
| **`$randomMimeType`**              | A random MIME type                                                | `audio/vnd.vmx.cvsd`,                                                                      |
| Stores                             |||
| **`$randomPrice`**                 | A random price between 0.00 and 1000.00                           | `531.55`, `488.76`, `511.56`                                                               |
| **`$randomProduct`**               | A random product                                                  | `Towels`, `Pizza`, `Pants`                                                                 |
| **`$randomProductAdjective`**      | A random product adjective                                        | `Unbranded`, `Incredible`, `Tasty`                                                         |
| **`$randomProductMaterial`**       | A random product material                                         | `Steel`, `Plastic`, `Frozen`                                                               |
| **`$randomProductName`**           | A random product name                                             | `Handmade Concrete Tuna`, `Refined Rubber Hat`                                             |
| **`$randomDepartment`**            | A random commerce category                                        | `Tools`, `Movies`, `Electronics`                                                           |
| Grammar                            |||
| **`$randomNoun`**                  | A random noun                                                     | `matrix`, `bus`, `bandwidth`                                                               |
| **`$randomVerb`**                  | A random verb                                                     | `parse`, `quantify`, `navigate`                                                            |
| **`$randomIngverb`**               | A random verb ending in `-ing`                                    | `synthesizing`, `navigating`, `backing up`                                                 |
| **`$randomAdjective`**             | A random adjective                                                | `auxiliary`, `multi-byte`, `back-end`                                                      |
| **`$randomWord`**                  | A random word                                                     | `withdrawal`, `infrastructures`, `IB`                                                      |
| **`$randomWords`**                 | Some random words                                                 | `Samoa Synergistic sticky copying Grocery`,                                                |
| **`$randomPhrase`**                | A random phrase                                                   | `You can't program the monitor without navigating the mobile XML program!`,                |
| Lorem ipsum                        |||
| **`$randomLoremWord`**             | A random word of lorem ipsum text                                 | `est`                                                                                      |
| **`$randomLoremWords`**            | Some random words of lorem ipsum text                             | `vel repellat nobis`                                                                       |
| **`$randomLoremSentence`**         | A random sentence of lorem ipsum text                             | `Molestias consequuntur nisi non quod.`                                                    |
| **`$randomLoremSentences`**        | A random 2 to 6 sentences of lorem ipsum text                     |                                                                                            |
| **`$randomLoremParagraph`**        | A random paragraph of lorem ipsum text                            |                                                                                            |
| **`$randomLoremParagraphs`**       | 3 random paragraphs of lorem ipsum text                           |                                                                                            |
| **`$randomLoremText`**             | A random amount of lorem ipsum text                               |                                                                                            |
| **`$randomLoremSlug`**             | A random lorem ipsum URL slug                                     | `eos-aperiam-accusamus`, `beatae-id-molestiae`, `qui-est-repellat`                         |
| **`$randomLoremLines`**            | 1 to 5 random lines of lorem ipsum                                | `Ducimus in ut mollitia.` <br />`A itaque non.`                                            |

