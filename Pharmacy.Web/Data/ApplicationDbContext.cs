using Microsoft.EntityFrameworkCore;
using Pharmacy.Web.Models;

namespace Pharmacy.Web.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Medicine> Medicines { get; set; }
    }
}
