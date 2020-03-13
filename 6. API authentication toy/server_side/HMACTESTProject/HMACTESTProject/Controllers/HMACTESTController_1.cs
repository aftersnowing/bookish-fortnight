using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
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
            var acce = header.Accept;

            var auth = header.GetValues("").FirstOrDefault();


            return Ok(new { message = "OK" });
        }
    }
}
