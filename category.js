const categoryItem = document.getElementById('categoryItem');
const token=localStorage.getItem('access_token')
function getCategory() {
    fetch('https://autoapi.dezinfeksiyatashkent.uz/api/categories')
        .then(res => res.json())
        .then(res => {
            res.data.forEach((item, index) => {                
            categoryItem.innerHTML += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${item.name_en}</td>
                        <td>${item.name_ru}</td>
                        <td><img  style="width: 150px;height: 100px;" src='https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/${item.image_src}'></td>
                        <td ><button onclick="deleteCategory('${item.id}')">Delete</button></td>
                    </tr>
                `;
            });
            
        })
        .catch(error => {
            console.error('Kategoriyalarni olishda xatolik yuz berdi:', error);
        
        });
}

getCategory();

function deleteCategory (id) {
    fetch(`https://autoapi.dezinfeksiyatashkent.uz/api/categories/${id}`,{

    headers:{
        Authorization:`Bearer ${token}`
    },
    method:'DELETE'
    }
    ).then(res=>{
        if (res.ok) {
            alert(" O`chirildi ")
            location.reload();
        } else {
            alert(" O`chirishda xatolik");
        }
    }).catch(err=>{
        console.log(err);
    })
}
