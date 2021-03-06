import React, {Component} from 'react';

import ProfilePicture from "./ProfilePicture";

const containStyle = {
    width: '250px',
};

class EditProfilePic extends Component {
    //props:
    //imagePreviewUrl
    //saveNewImageUrl()
    //username

    fileChangedHandler = event => {
        // this.setState({
        //     selectedFile: event.target.files[0]
        // });
        //
        // let reader = new FileReader();
        //
        // reader.onloadend = () => {
        //     this.setState({
        //         imagePreviewUrl: reader.result
        //     });
        // };
        //
        // reader.readAsDataURL(event.target.files[0])

        let fd = new FormData()
        fd.append('profilePic', event.target.files[0], this.props.username)
        let url = new URL('https://59788.cke-cs.com/token/dev/D4EUlj4fwrGlaxEwLwLqfkedrU6RZwlwhF0b1NhgtydQPokOdVxaa2FFAEz0')
        fetch(url).then((resp) => {
            return resp.text()
        }).then((token) => {
            let url = new URL('https://59788.cke-cs.com/easyimage/upload/')
            fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: token
                },
                body: fd
            }).then((resp) => {
                if (!resp.ok) {
                    console.log('error upload error:')
                    console.log(resp)
                } else {
                    resp.json().then((json) => {
                        for(let reso in json){
                            if(Number(reso)<900){
                                this.props.saveNewImageUrl(json[reso])
                                return
                            }
                        }
                        console.log("No appropriate resolution found.")
                    })
                }
            })
        })
    };

    render() {
        return (
            <div style={containStyle}>
                <div className="input-group mb-4">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" name="avatar"
                               onChange={this.fileChangedHandler}
                               aria-describedby="inputGroupFileAddon01"/>
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                    </div>
                </div>
                <ProfilePicture image={'https://lh5.googleusercontent.com/proxy/wIs8-k2bUkZpQxeZIoYXpuEChdqH9XUhCVdTu9XQ5ClPMntFj-fd5dDFAjSRTEaQx06ovHZgd-LH1rY8jsRttj49vva0p0Ob85_5AJ0T7kT_JpRuzdWkb0swYw'}/>
            </div>
        );
    }
}

export default EditProfilePic;
