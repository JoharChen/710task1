/**
 * Created by joharchan on 17-7-10.
 */

var arr_info=[["姓名", "语文成绩", "英语成绩", "数学成绩", "编程成绩"],
              ["张三", "95", "80", "75", "80"],
              ["李四", "80", "70", "85", "90"]];

var arr_ChinedeGrade = [];
var arr_EnglishGrade = [];
var arr_MathGrade = [];
var arr_ProgrammingGrade = [];
var arr_TotalGrade = [];
var arr_AvgGrade = [];
var avgSum = 0;
var mid;

for(var i= 1; i<arr_info.length;i++)
{
     arr_ChinedeGrade[i]= parseInt(arr_info[i][1]);
     arr_EnglishGrade[i]= parseInt(arr_info[i][2]);
     arr_MathGrade[i] = parseInt(arr_info[i][3]);
     arr_ProgrammingGrade[i] = parseInt( arr_info[i][4]);
     arr_TotalGrade[i] = arr_ChinedeGrade[i]+arr_EnglishGrade[i]+arr_MathGrade[i]+arr_ProgrammingGrade[i];
     arr_AvgGrade[i]=arr_TotalGrade[i]/4;
     avgSum += arr_AvgGrade[i];
}

     avg = avgSum/(arr_AvgGrade.length-1);

if(arr_TotalGrade.length%2==0) mid=arr_TotalGrade[arr_TotalGrade.length/2];
else mid=(arr_TotalGrade[(arr_TotalGrade.length+1)/2]+arr_TotalGrade[(arr_TotalGrade.length-1)/2])/2;

var str = "成绩单"+'\n'+"姓名|数学|语文|英语|编程|平均分|总分"+'\n'+"========================"+'\n';

for(var i= 1; i<arr_info.length;i++)
{
    str+=arr_info[i][0]+'|'+arr_MathGrade[i]+'|'+arr_ChinedeGrade[i]+'|'+arr_EnglishGrade[i]+'|'+arr_ProgrammingGrade[i]+'|'
    +arr_AvgGrade[i]+"|"+arr_TotalGrade[i]+'\n';
}

str+= "========================"+'\n'+"全班总平均分："+avg+'\n'+"全班总分中位数："+mid;
console.log(str);
