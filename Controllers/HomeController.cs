using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyResumeApp.Models;
using MyResumeApp.Services;

namespace MyResumeApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public string SetupInputData(Contact _Contact)
        {
            string result = string.Empty;
            try
            {
                ContactHelper _ContactHelper = new ContactHelper();
                result = _ContactHelper.SetupContactInfo(_Contact);
            }
            catch (Exception ex)
            {
                result = ex.InnerException.ToString();
            }
          
            return result;
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
