export const SheetShow = () => {

  return (

    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Seat Booking - Tron: Ares</title>
        <div className="header">
          <div className="movie-info">
            <h2>Tron: Ares</h2>
            <p>Cinepolis: Nexus Seawoods, Nerul, Navi Mumbai | Fri, 10 October, 2025 | 09:00 PM</p>
            <div className="showtime">09:00 PM | 4DX SCREEN</div>
          </div>
        </div>
        <div className="screen-info">₹450 NORMAL</div>
        <div className="seats-container">
          <div className="rows" id="seatArea">

            <div className="legend">
              <div><span /></div>
              <div className="selected"><span /> </div>
              <div className="sold"><span /> </div>
            </div>

          </div>
        </div>
        <div className="legend">
          <div><span /> Available</div>
          <div className="selected"><span /> Selected</div>
          <div className="sold"><span /> Sold</div>
        </div>
        <div className="pay-section">
          <button className="pay-btn" id="payBtn">Pay ₹0</button>
        </div>
      </div>


    </>

  )

}