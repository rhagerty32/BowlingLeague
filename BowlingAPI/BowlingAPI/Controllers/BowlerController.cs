using BowlingAPI.Data;
using BowlingAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BowlingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private readonly BowlingContext _context;

        public BowlerController(BowlingContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bowler>>> GetBowlers()
        {
            return await _context.Bowlers
                .Where(b => b.TeamID == 1 || b.TeamID == 2)
                .ToListAsync();
        }
    }
}