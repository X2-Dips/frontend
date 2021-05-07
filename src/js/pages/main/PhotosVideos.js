import React from 'react'
import "./bootstrap.css";
const PhotosVideos = () => {
    return (
        
             <div className="container">
             <div class="text-center">
        <h1 className="heading">Photos and Videos</h1>
        
        </div>
        <hr class="hr"></hr>
        <form>
        <div class="container d-flex align-items-center justify-content-center">
        <h4>Upload Photos and Videos</h4>
            <hr class="hr"/>
                <div class="row">
                    <div class="col">
                        <div class="container col-xl-3 col-lg-4 col-md-6 col-sm-12 flex-box mb-2 ">
                             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAflBMVEUAAAD///+7u7smJiaQkJB0dHSWlpZ3d3f4+PiEhIT8/PzExMQaGhrOzs7p6enm5uasrKygoKAUFBQ+Pj7Z2dlXV1fz8/Ph4eGBgYEzMzNGRkZsbGxOTk65ubnNzc1iYmI2NjYhISGlpaUsLCxfX18jIyMLCwtVVVU9PT1FRUUU35LkAAAKCUlEQVR4nO2da1vjOAyFXVraUkqvEAq9wFCGmf3/f3AbeiH19ciWnOw+OZ+J8ds4tizJsupQNZzez+7Wm5fx4kt9LX4tPwe97UNBbiaXFOmvp9vBXln19drbjYT6mCQccHSzWtjhLnrtPwp2NU4o4G4dgDup25+I9pcsCHDSC727qjY30p2mCAB8fCPQHTUfyvccVBDw8YmMV6rflBknADj5jMIr9ZEHICQ/YC8a76D9QyYGr3yAu68UvoPWDfgUPYC3iXil7vOROOQEfBwz8Ck1yAljkwvwgwXvoG7NC78DkL70uVXvum8FLN4Z+Q5rYm6oqmyAE1Y8Ve+HaAF85OZT6i0/2FkmoACfUn9qQDvKABThU+qzDrhSOuBUhu9g1dSCZwAWUnxK3TUC8F0OUM0aAMi5vpuqZXdxBdgX5VOqDudiFfBBmE/9Uy/gSJpPqV6tgLIf4FH5/aY/gPcZ+FS3PsAMA7RU9p3FBfAuD2D2mfQMGGOiLWNGdW6T7QwY4d5djqIs88zzzAkwoqevKc9lB6S/wFM/n+mEeS22IyD9RTydG6B/vBujE7v1LacG84eRBggG/yx8MR6cZx2Q3Qmk1O1zFZD8D66mwgnVw29OpBtqBwANKoDUGIvWw4JKaKyFM2IDkI4u529A4pOGF7D4RWtgnmGMlpqeAInr9coYYZ3hb1ILe6MBSogc12J0BKRNMVbfytCRXeKQMc0IGYqf34BD0jOOLd3ob1IjUluZ+xKQ1LhzNzBaEloxdk1S3rzXEnBAeMCYHiqizPVT/WHaECf8I0WaQ318JELDhUj5lSmaKYo1GfJs4ikZRjSGLeCqaaAIi2zYcwsTfulPSnn0NgofHNsgH2HF0QPbtKkc1151XsA/xSLRaGqGkX7R55G+oHYV+tOhCSHggBBzPhXXRlFXgXMMvktdQe3JxXznGiC2zFN24ZDZZZqjXLrRAKFJlOYognZfYtmIOiDye1MdYUiUSiw/SAcEJgXDrgpqHm7U2FBwSQcMr810PsQw2bGTnaQDvod6EjeWgp+2WIKXDhgw4xex38o2ACgWsacBjuNjJTfehvMBdn292KfEgvyE/p0X27/1v8HEMIJ3hyBmq1EmmbHF4enI57Et7rbHL8r2BimuFCKgV9m+wT//d0Bqbj0XYLZ1ENvd8ANSLZli9zG4Xd/2tiEbTwekpm9xAZIMwGJemewXA+/mTQcMWRxSgIQVdmp8Ru8e/4IOuKsHcIHzWZveOE1IHZAauWIChPPyildHC65ZSgekZjgxAaL5vx6XkSMMpAN2SGEhNkBwGfSmONi7YgAS1wkmQMwLEvBpWs09A5A4jTIBQnzBcI7tZzIAibMMDyB2UCTo2rFlZxqAxPg4DyC0lwCiopZ2TEDaR8gDCH2CSJsIIC0+zgOI8EELmHnW2wSkrYQsgJZMlNCrcGgJANLSSFgAoVAHliRvmGwWQNIYZQFE+MDcASMsawEkpXJxAELHJ8C4njHabYCU3nEAQntBcFw96c/ZAClrPQMgtsqDyRHGWm8DpBx6YQDEoqloYgkESEhpTgd8h/h4AQlJSumAoD+NdYgS8nCSAdHoPNgl4/SzHbAD+3+TAdF8FDCd3+iPAxDOWFt1hhbhgOahApew9owB7wCkbuyjhcfmMQvScD+6AKWSxTRBZvZR0EpvDggXIGa8p2qM83U6yGkFM0PQCZjliCvp3BKQjGKkZfoAM5wBJVZDCDdoSfF0A8qf4qUmqAUdfrYp2QMofsyVnFIUmkhtAQofoMghqR9F1CDzZ+taG/QCDnlqjdkVk1fh7ZDd/e8FlDolVeo2gu8w8707G3TkkPsBpQoCJRQ9ciURuFyrAUCp/P6EnKIb24K/cibUhgBlFgtwk2vXyFjx3zwWbRCwQw1qA8K3EA7dVxaMzdybARkG5P8OWUpyTXezfm9+8xhK9gYAO1PeA5mEHQSDEMDO0BX5j1HmWrgQIKfVlrtGDgjINZl+Zq/WjAJ2Cg7DtIZaajAgsFsJ6amOOmMEwM4wqY7xVz2lYSmAhyWRmCZUUQ0lxr5FAzxMNugBymsNartigwp4QKSmdSt1V2NpZjrgYaCSvsWXj1oL+ccAHqabGWrbrOq+NCQO8KDiI1j4ab+qv/R7POBBo4e5E3I82DbjMpQUwG9NDtuW9eYyt47/eVrNt8/QvQRZ7JpkwLNGRxGeeMtSUZwNkKpJeTJA7MTSj+oCPDlC5GehmgAvfiOxw8ln1QNY8RlJ23B1ABbVU5hJHkRANQBqzgHhqwvyAxrHv6I2Us/r34s3ZIeZG3BksX0iFvzTrwR4WDMDPlvjX+QSo5deh2McRMDEq6FcqRtUs/WneKKRH+r/l0HAu+U2YXfnzH8a0xqt5mGFRikRsOziOtb88BQCoYVjrjodqPMcAVg2GrEXmnqLcpICvn3Co3GA5Z/ezkhmVsg1TrG7tWwLb7pNNOD3i8T7FA5uEAa+PhZ8K2kSILyfGyL5p/iAMB71vP4sgGAIFbW7Lcms7phcDkC0XOILCGj7nJ3WUAZAvJQmaHdb0w5dpRbFAQuKIxxLP7SnrDkmKWlAYgYDZHc7fjK7RSsMSC4JjtjdpGdlASNC+2ETyZ1AZ1toJAFHMVHvRdDu9thEFkJBwAmxIvxJQbvbl7ttvn85wOi8jJDd7V12kCOuPIBAjrxLAbvbG0Zf6OaQFGBSvoLf7vY/29WcDjKAQ3qY+0o+uzuUhby/nqVEAKep14L77O5geudfcUCGtC/PkYqw7XDlahMAZCnj7vYlAefiqq42fkCOa92VJ6sUsR4qPw87ILV2oFMuuxt6+MeZwgxY0G578cpeLA+8a+PSNV5A3vRu69km9JzDeYizAjIfQbD6u+ENWI8fkP0WDFs5OXwH1ucGFDiNZ7G7CVuwD15A8o1wiMwjapQjDjNOQM6TBxXpQVzahUU3bICF1D1C+jEE4jx9zwQ4kbms7FvXdjc1M/7hemaPBIy4GBPXdX0R8kx2/UAcoPCt4FdRavwuJ6uiAMWPo1ft7sRvIQZQ5LrHa/3EjlKrF0QASl3idaWL3Z1q7NIBqWWrI3W2u1OPF5EBM/Fd/N3k8taaiICr1P+H61SVMXESpQImO88IOu7RUw0mImBWlXZ38tWZTQYsg9TJJlOjAQ92d3IdpmYDqiIhonNUwwGXyXWmGg6YrhawBWy4WsAWsOFqAVvAhqsFbAEbrhawBWy4WsAWsOFqAVvAhqsFbAEbrhawBWy4WsAWsOFqAVvAhmsfAkwOktesZQgwy3VTglqHAME75BqrebAqV9zJ6sboMQiYK71QRt1OEDDTrXZCmoUB/9PzaLcDAEodccmhZwhwKHgIRFbl8XyktmERV+6+dn0fg8KKN+a4e5Fb42PxAbA65QPbUeRM+n0+8gyX35x+rLs5U7YTNP7T+6kV9C9jxJiFWTFQNAAAAABJRU5ErkJggg==" 
                            class="img-thumbnail" width="150px" alt=""/>
                            </div> 
                         </div> 
                         ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                            
                        </div> 
                        ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                        </div>
                        ​<div class="col">
                            <img src="data:image/png;base64,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" class="img-thumbnail" width="150px" alt=""/>
                        </div>
                    </div>
                    
                    ​
                </div> 
                <br></br>
                <hr class="hr"/>
                <br></br>
                <h4 class="text-center">OR</h4>
                <br></br>
                <hr class="hr"/>
                <div class="text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT98N-G2yNHOYoeJRr4OKeI_e-hyeWeTMGNyw&usqp=CAU" width="30px" alt=""/>
                    <br></br>
                    <h2 class="text-center">Add Video to get 3X more responces.</h2>
                    <h3><p >90% tenants contact on properties with videos</p></h3>
                    <br></br>
                    <button class="btn">Add Videos</button>
                    <br></br>
                    

                </div> 
        </form>
        <br></br>

        </div>
    )
}

export default PhotosVideos;