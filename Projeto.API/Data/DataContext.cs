using Microsoft.EntityFrameworkCore;
using Projeto.API.Model;

namespace Projeto.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        : base (options)
        {
            
        }

        public DbSet<Evento> Eventos {get; set;}
        
    }
}