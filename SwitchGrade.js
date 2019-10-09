var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter Final HW pts (0-30):"));

floatMidPts = parseFloat(prompt("Please enter Midterm Exam pts (0-35):"));

floatFinPts = parseFloat(prompt("Please enter Final Exam pts (0-35):"));

floatTotalPts = parseFloat(floatHwPts+floatMidPts+floatFinPts);

intGradeOption = parseInt(prompt("Please enter '1' if want Pass/Fail, '2' if you want a letter grade (A-F):"));

if (intGradeOption===1)
{ 
    if(floatTotalPts >= 80)
{stringFinalGrade ="Pass";
    }
 else{
     stringFinalGrade = "Fail";
    }}
 else
 {
  switch(intGradeOption===2){
   case floatTotalPts >=90:
    stringFinalGrade = "A";
    break;
   case floatTotalPts >=80 && floatTotalPts <90:
    stringFinalGrade = "B";
    break;
   case floatTotalPts >=70 && floatTotalPts <80:
    stringFinalGrade = "C";
    break;
   case floatTotalPts >=60 && floatTotalPts <70:
    stringFinalGrade = "D";
    break;
  case floatTotalPts <60:
   stringFinalGrade ="F";
   break;
  }
 }
alert("Your final grade is: " + stringFinalGrade);