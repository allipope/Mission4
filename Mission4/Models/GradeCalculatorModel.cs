using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    // cretae the model with validation to ensure each input is between 0 and 100
    public class GradeCalculatorModel
    {
        [Range(0, 100)]
        public int Assignments { get; set; }
        [Range(0, 100)]
        public int GroupProjects { get; set; }
        [Range(0, 100)]
        public int Quizzes { get; set; }
        [Range(0, 100)]
        public int Midterm { get; set; }
        [Range(0, 100)]
        public int Final { get; set; }
        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
