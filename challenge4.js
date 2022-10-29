//Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. It should return the average grade by comparing with the grade table 1-49: F 50-59: E 60-69: D 70-79: C 80-89: B 90-100: A

function calculateGrade(marks) {
    let total = 0;
    let avg = 0;
    let grade = "";
    for (let i = 0; i < marks.length; i++) {
        total += Number(marks[i]);                
    }
    avg = Math.round(total / marks.length,0);
    if (avg >= 90 && (avg <= 100)) {
        grade = "A";
    }else if(avg >= 80 && (avg <= 89)){
        grade = "B";
    }else if(avg >= 70 && (avg <= 79)){
        grade = "C";
    }else if(avg >= 60 && (avg <= 69)){
        grade = "D";
    }else if(avg >= 50 && (avg <= 59)){
        grade = "E";
    }else if(avg >= 1 && (avg <= 49)){
        grade = "F";
    }else if(avg == 0){
        grade = "All entries cannot be zero";
    }else{
        grade = "Invalid array values";
    }
    return grade;
}
 module.exports =calculateGrade