const gameEvents = new Map([
    [17, '⚽ GHI BÀN'],
    [36, '🔁 Thay người'],
    [47, '⚽ GHI BÀN'],
    [61, '🔁 Thay người'],
    [64, '🔶 Thẻ vàng'],
    [69, '🔴 Thẻ đỏ'],
    [70, '🔁 Thay người'],
    [72, '🔁 Thay người'],
    [76, '⚽ GHI BÀN'],
    [80, '⚽ GHI BÀN'],
    [92, '🔶 Thẻ vàng'],
])  


const events = new Set(gameEvents.values());
console.log(events);


gameEvents.delete(64);


console.log(`1 sự kiện xảy ra, trung bình mỗi ${90/ gameEvents.size} phút`)
const time = [...gameEvents.keys()].pop();
console.log(`1 sự kiện xảy ra, trung bình mỗi ${time/ gameEvents.size} phút`)


for (const [min, event] of gameEvents){
    const half = min <= 45 ? 'Hiệp 1' : 'Hiệp 2';
    console.log(`${half}: Phút ${min} ${event}`)
}