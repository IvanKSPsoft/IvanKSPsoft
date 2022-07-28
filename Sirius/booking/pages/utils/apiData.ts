export const dataSet = {
    dateTimeLocal : "2022-08-30T10:00:00+00:00",
}

export const vaaVaccineData = {
    endUserTraveler:{ 
        firstName: "a", 
        lastName: "b", 
        dateOfBirth: "1967-08-31T00:00:00Z", 
        email: "a.a@b.COM" },
    
    rules : [
     {
      validationDate:"2022-05-12T15:00:00+04:00",
      languages:[
         "EN",
         "ES",
         "FR"
      ],
      nameRequirements:{
      },
      ageRequirements:{
          minimalAge:5,
          maximimAge:80
      },
      allowedVaccines: [
            {
                vaccineName: "PFIZER",
                validTo: "P14D",
                validFrom: "P1Y",
                requredDosesCount: 2,
                intervalFromLastDose : "P14D"
            },
            {
                vaccineName: "Moderna",
                validTo: "P14D",
                validFrom: "P1Y",
                requredDosesCount: 2
            },
            {
                vaccineName: "Janssen",
                validTo: "P14D",
                validFrom: "P1Y",
                requredDosesCount: 1,
                boosterDoseRequired: true
            }
        ]
    }],
    reusable:true,
    document: {
        "bodyBase64": "JVBERi0xLjIgCjkgMCBvYmoKPDwKPj4Kc3RyZWFtCkJULyAzMiBUZiggIFlPVVIgVEVYVCBIRVJFICAgKScgRVQKZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgNSAwIFIKL0NvbnRlbnRzIDkgMCBSCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9LaWRzIFs0IDAgUiBdCi9Db3VudCAxCi9UeXBlIC9QYWdlcwovTWVkaWFCb3ggWyAwIDAgMjUwIDUwIF0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1BhZ2VzIDUgMCBSCi9UeXBlIC9DYXRhbG9nCj4+CmVuZG9iagp0cmFpbGVyCjw8Ci9Sb290IDMgMCBSCj4+CiUlRU9G",
        "mimeType": "image/jpeg"
    }
}