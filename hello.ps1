While ($True) { 
    $fName = New-Guid; 
    $lName = New-Guid; 
    $employeeId = New-Guid; 
    $myDate = Get-Date;
    $myNewDate = $myDate.ToString('MM-dd-yyyy');
    Invoke-WebRequest -Uri "https://devb2wfunctions.azurewebsites.net/api/StoreAndCheck" `
-Method "POST" `
-Headers @{
"Pragma"="no-cache"
  "Cache-Control"="no-cache"
  "User-Agent"="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44"
  "Accept"="*/*"
  "Origin"="https://b2wdev.z20.web.core.windows.net"
  "Sec-Fetch-Site"="cross-site"
  "Sec-Fetch-Mode"="cors"
  "Sec-Fetch-Dest"="empty"
  "Referer"="https://b2wdev.z20.web.core.windows.net/qr.html?fName=$fName&lName=$lName&empId=$fName&dob=04-14-1987&qst1=No&qst2=No&scId=b350d6ad-f57b-40e7-ba20-41514ad8ace8&campaignId=3fdefc9f-386c-490d-a729-2cc2d859fbcd&PatientId=false&flu=true&covid=true&temp=true&insuranceFlag=true&questions=true&nqr=true&guest=true&currDate=Thu+Sep+10+2020+18:44:29+GMT-0600+(Mountain+Daylight+Time)&clientId=19e57992-e27a-48c5-87d3-a577ef032928&conditionSampleCheck=true"
  "Accept-Encoding"="gzip, deflate, br"
  "Accept-Language"="en-US,en;q=0.9"
  "Cookie"="UserId=22549787-f04a-4594-8031-e2a33a68b4f1; ARRAffinity=ddf1749229a0f7d9dc92a08060b35e70e249ccad2cc654220e5d47c8cce539ef"
} `
-ContentType "application/json;charset=UTF-8" `
-Body "{`"temp`":`"97.9`",`"fName`":`"$fName`",`"lName`":`"$lName`",`"dob`":`"04-14-1987`",`"employeeId`":`"$employeeId`",`"currDate`":`"$myNewDate`",`"scId`":`"b350d6ad-f57b-40e7-ba20-41514ad8ace8`",`"qst`":[{`"questionId`":`"qst1`",`"answerId`":`"No`"},{`"questionId`":`"qst2`",`"answerId`":`"No`"}],`"fluId`":`"1`",`"guest`":`"true`"}" | Out-File -Append "C:\Users\hadak\Downloads\hello.txt";
}