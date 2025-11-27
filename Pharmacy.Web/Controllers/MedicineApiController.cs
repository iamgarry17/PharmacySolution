using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pharmacy.Web.Data;
using Pharmacy.Web.Models;

namespace Pharmacy.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MedicineApiController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public MedicineApiController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetMedicines()
    {
        var meds = await _context.Medicines.ToListAsync();
        return Ok(meds);
    }

    [HttpPost]
    public async Task<IActionResult> AddMedicine([FromBody] Medicine medicine)
    {
        _context.Medicines.Add(medicine);
        await _context.SaveChangesAsync();
        return Ok(medicine);
    }
}
