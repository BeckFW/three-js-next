export default function ThreeContent() {

  const floors = [
    {
      name: "G", 
      fullName: "Ground",
      content: "Entrance, Lobby, Reception",
    }, 
    {
      name: "M",
      fullName: "Mezzanine", 
      content: "Cafe, Restaurant, Careers",
    }, 
    {
      name: "01",
      fullName: "First Floor", 
      content: "Computer Rooms, Huxley Link",
    },
    {
      name: "02",
      fullName: "Second Floor", 
      content: "Games Studios, Computer Rooms",
    },
    {
      name: "03",
      fullName: "Third Floor", 
      content: "Computer Rooms",
    },
    {
      name: "04",
      fullName: "Fourth Floor", 
      content: "Lab Rooms",
    },
    {
      name: "05",
      fullName: "Fifth Floor", 
      content: "Offices",
    },
  ]   

    return(
      <main className="relative">

      <div class="groundSeperatorGroup">
      {floors.map((floor) => {
        return(
          <div className="w-full">
            <div class="groundSeperator">{floor.name}</div>
            <p>{floor.content}</p>
        </div>
        )
      })}
      </div>
      
        </main>
    )
}