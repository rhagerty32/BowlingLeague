using Microsoft.EntityFrameworkCore;
using BowlingAPI.Models;

namespace BowlingAPI.Data
{
    public class BowlingContext : DbContext
    {
        public BowlingContext(DbContextOptions<BowlingContext> options) : base(options) { }

        public DbSet<Bowler> Bowlers { get; set; }
    }
}