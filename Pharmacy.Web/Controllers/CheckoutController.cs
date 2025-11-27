using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Checkout;

namespace Pharmacy.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        public CheckoutController(IConfiguration config)
        {
            StripeConfiguration.ApiKey = config["Stripe:SecretKey"];
        }

        public class CheckoutRequest
        {
            public List<CartItem> Items { get; set; }
            public int DeliveryFee { get; set; }
            public string Address { get; set; }
        }

        public class CartItem
        {
            public string Name { get; set; }
            public int Price { get; set; }
            public int Quantity { get; set; }
        }

        [HttpPost("create-payment-intent")]
        public ActionResult CreatePaymentIntent([FromBody] CheckoutRequest req)
        {
            int amount = req.Items.Sum(i => i.Price * i.Quantity) + req.DeliveryFee;

            var options = new PaymentIntentCreateOptions
            {
                Amount = amount,
                Currency = "gbp",
                Metadata = new Dictionary<string, string>
                {
                    { "address", req.Address }
                }
            };

            var service = new PaymentIntentService();
            var intent = service.Create(options);

            return Ok(new { clientSecret = intent.ClientSecret });
        }
    }
}
