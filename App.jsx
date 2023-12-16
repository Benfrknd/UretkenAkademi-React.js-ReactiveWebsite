import './App.css';

function App() {

  const userName = "Furkan"
  const users = ['Furkan', 'Mehmet', 'Ozan', 'Akif']
  const mapUser = users.map((user, i) => <li key={i}>{user}</li>)

  const isActive = false

  const styles = {
    h4Style: { backgroundColor: "blue", fontSize: "24px", color: "white" }
  }

  const products = [
    { id: 1, name: "Macbook Pro 14", inStock: false },
    { id: 2, name: "Macbook Pro 13", inStock: true },
    { id: 3, name: "İpad", inStock: true },
    { id: 4, name: "Lenovo", inStock: false }

  ]

  return (
    <>
      <div className="jumbotron text-center header-bg-color">
        <h1>Furkan Döğen</h1>

      </div>
      <div className="container">
        <div className="text-center">
        </div>
      </div>
      <hr />
      <div className="col-md-8 col-sm-8">
        <div className="card">
          <div className="card-header alert card-color text-center">Blog</div>
          <div className="card-body">

          <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
        <h2 className='certificate text-center'>Hakkımda</h2>
        <h4 className='margin-10'>Düşün, Planla, Yap</h4>
        <h6>WEB GELIŞTIRICI | MOBIL UYGULAMA GELIŞTIRICI | WEB TASARIMCI |
          KULLANICI DENEYIMI/KULLANICI ARAYÜZÜ TASARIMCISI MODDER
        </h6>
        <p>Merhaba, ben Furkan!</p>
        <p>
          Kendimi tanıtmama izin verin: Ben 20 yaşında, statükoyla asla yetinmeyen genç bir adamım. Her şeye kendi
          benzersiz dokunuşumu katmaktan, her zaman diğerlerinden sıyrılmaktan zevk alıyorum. Kalıpları kırmaya ve
          işleri
          farklı şekilde yapmaya yürekten inanıyorum.</p>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="card certificate text-center" >
              <h2>Sertifikalarım</h2>
              <div className="list-group">
                <div className="list-group-item">
                  <h6>Temel Python Eğitimi</h6>
                <div className="list-group-item"><h6>Yapay Zeka Eğitimi</h6>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>
            

      </div>
            
          </div>
        </div>
        </div>
      </div>



    </>
  )
}

export default App
