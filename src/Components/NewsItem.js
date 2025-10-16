import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description,imgUrl,newsUrl}=this.props;
    return (
      <div>
         <div className="card" >
            <img src={imgUrl?imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAADTCAMAAABeFrRdAAAAqFBMVEX5+fn////8/Pz7/Pz8/fXw8PH29fX5+/3X2NjHxcfOxcT09PL6+/Lr8fDEwcT1/v/S2efK2ebn5ebt6+fy9fjEvr3Vz8Lp9ffn7fbZ3OTr69u8vMng4+j37ebGy8/l4t/IvLXZ0czV5e7k5Nu8uLy/tbLZ4ODN1diytLzMwsHFytPb2dzPzcrQw7vj29XDw8rq4c/m6tz15NrM0uXbz8Dv9ezY2dTAxMBWBykMAAACoklEQVR4nO3W7VLaQABG4d0N+QIMCFGQChixIIhIpdr7v7MmUVuKzHQ6BmvfnvNr2YRJntklwRjt7E5/+34OHV7t8GqHVzu82uHVDq92eLXDqx1e7fBqh1c7vNrh1Q6vdni1w6sdXu3waodXO7za4dUOr3Z4tcOrHV7t8GqHVzu82uHVDq92eLXDqx1e7fBqh1c7vNrh1Q6vdni1w6sdXu3waodXO7za4dUOr3Z4q8w5tzvV2f7QTX857lV79X0d1Fs7iaJ0Zy5p/Ry706N467hX71V6+X0d1ntnnQkaQeCHDT/NR2np9fNV9f3QC4LTvslnfeM1/KD8RnGKb0w+ZUw+5fJvVnpHB/YmnU7z5Gzw6Xw4GsfpxbTwmmVn2e9Os8vhaHJ1lISfp1l/PJtc58s9711M64vJonYzWZjl+e3xcLRqv/pFvKkDe32/eRcONvZr363b82IrJ4O2ay4aUbbJUpvv5zCxw9m8VUtC4+q9eWvddietcZR8adv74+xsfNX67WX+pAN7bW578tr15YvXDhfL9H6T9eztltf88Mbrtn329oJKb+gdnlcPhdc14seFVy+9XhYt09XsdNOMH7/l3th1Z4PR43X5vKqX3of4JmnVo9vjZhyd/UP7uXwfORO6l1Ex9TR03vOgmHWBzbd98T5y5QnF4SC0q0u354X2tj7E/w1v9fq91YiiacXP5qIP4TXenmWsfGnLPob3/cKrHV7t8GqHVzu82uHVDq92eLXDqx1e7fBqh1c7vNrh1Q6vdni1w6sdXu3waodXO7za4dUOr3Z4tcOrHV7t8GqHVzu82uHVDq92eLXDqx1e7fBqh1c7vNrh1Q6vdni1w6sdXu3waodXO7za4dUOr3Z4tcOrHV7t8GqHVzr3n3l3ufY7jpwo0bV0UIsAAAAASUVORK5CYII="} alt='some error occured'/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read</a>
         </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
