using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web.Http;

namespace HMACTESTProject.Controllers
{
    public class HMACTESTController : ApiController
    {
        [Route("HMACTEST")]
        [HttpGet]
        public IHttpActionResult TestResponse()
        {
            var request = Request;
            var header = request.Headers;
            //var hashCode_p = header.GetValues("Authentication").FirstOrDefault();
            //var timeStamp_p = header.GetValues("Time-Stamp").FirstOrDefault();

            var sharedKey = Encoding.UTF8.GetBytes("POSSM");
            //var timeStamp_base64 = Convert.ToBase64String(Encoding.UTF8.GetBytes(timeStamp_p));
            //var timeStamp_base64 = Convert.ToBase64String(Encoding.UTF8.GetBytes("1234567890"));
            //var encordedTimeStamp = Encoding.UTF8.GetBytes(timeStamp_base64);
            var encordedTimeStamp = Encoding.UTF8.GetBytes("1234567890");


            //var hashCode_r = "";

            using (HMACSHA256 hmac = new HMACSHA256(sharedKey))
            {
                //byte[] value = hmac.ComputeHash(encordedTimeStamp);
                byte[] value = hmac.ComputeHash(encordedTimeStamp);
                var hashCode_r = Convert.ToBase64String(value);
                return Ok(new { response = "Success", value = value, hashCode_base64 = hashCode_r });
            }

            //if (hashCode_r == hashCode_p)
                //return Ok(new { response = "Success", hash = hashCode_r });
            //else
               // return Ok(new { response = "Fail" });
        }
    }
}
