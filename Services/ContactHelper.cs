using MyResumeApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyResumeApp.Services
{
    public class ContactHelper
    {
        public string SetupContactInfo(Contact contact)
        {
            string success = string.Empty;
            try
            {
                return success = "OK";
            }
            catch (Exception ex)
            {
                success=ex.InnerException.ToString();
            }
            return success="NOT OK";
        }
    }
}
