function gradedResult(marks) {
    const numberedMarks = Number(marks);
    if (!isNaN(numberedMarks) && numberedMarks >= 0 && numberedMarks <= 100) {
        const grade = getGrade(numberedMarks);
        return `The student's grade for a mark of ${numberedMarks} is: ${grade}`;
    } else {
        return "Invalid entry. Please input a figure between 0 and 100.";
    }
}
function getGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60) {
        return 'B';
    } else if (marks >= 50) {
        return 'C';
    } else if (marks >= 40) {
        return 'D';
    } else if (marks <  40) {
        return 'E';
    }
}