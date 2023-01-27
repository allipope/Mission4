$('#submit').click(function () {
    // calculate numeric grade using the weights in the syllabus
    grade = ($("#assignments").val() * .50 + $('#groupProjects').val() * .10 +
        $('#quizzes').val() * .10 + $('#midterm').val() * .10 +
        $('#final').val() * .10 + $('#intex').val() * .10)

    // if statement to determine what the letter grade is
    if (grade >= 94) { result = 'A' }
    else if (grade >= 90) { result = 'A-' }
    else if (grade >= 87) { result = 'B+' }
    else if (grade >= 84) { result = 'B' }
    else if (grade >= 80) { result = 'B-' }
    else if (grade >= 77) { result = 'C+' }
    else if (grade >= 74) { result = 'C' }
    else if (grade >= 70) { result = 'C-' }
    else if (grade >= 67) { result = 'D+' }
    else if (grade >= 64) { result = 'D' }
    else if (grade >= 60) { result = 'D-' }
    else { result = 'E' }

    // print the letter grade to the p tag in the form
    $('#jsOutput').html(('Your overall grade is ' + grade + '% which is a(n) ' + result));
})