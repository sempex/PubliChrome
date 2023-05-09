try {
    fetch('https://api.publibike.ch/v1/public/stations/119')
    .then(response => response.json())
    .then(data => {
        const location = document.getElementById('location')
        location.innerHTML = `${data.address}`
        const bikes = document.getElementById('bikes');
        bikes.innerHTML = `Bikes: <span style="font-weight: bold;">${data.vehicles.filter(vehicle => vehicle.ebike_battery_level == null).length}</span>`;
        const ebikes = document.getElementById('ebikes')
        ebikes.innerHTML = `E-bikes: <span style="font-weight: bold;">${data.vehicles.filter(vehicle => vehicle.ebike_battery_level != null).length}</span>`;

    })
} catch (error) {
    console.error("An error occurred: ", error);
}
