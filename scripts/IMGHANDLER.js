let Iimg = document.getElementById("Iimage")
let Jimg = document.getElementById("Jimg")
let Ipara = document.getElementById("IPara")
let Jpara = document.getElementById("Jpara")
let jbutton = document.getElementById("Jbutton")
let Ibutton = document.getElementById("Ibutton")
let IIMAGES = 
[
    "../images/panda.jpg",
    "../images/vampire.jpg",        
    "../images/tulips.jpg",
    "../images/starwbery.jpg",
    "../images/favmovie.jpg"
]
let IMESSGS =[
    "so here we have panda's pandas are a bunch of cute lazy lil fellas. they kinda like juul in a way juul is also very lazy😴😴. They also love something i love EATING so apperantly PANDAS SPEND 12 HOURS ADAY EATING, LIKE WHAT HOW HOWHWOHOWOW THATS SO INSANE THATS LIKE SO MUCH FOOD.",
    "So okay im sorry i didnt pick the proper picture but LOOK AT SNOOPIE AS A VAMPIRE ISNT HE A LIL SILLY FELLA okay anyway, i know u like vampire diarees diares diar HOW DO I SPELL IT LET ME LOOK IT UP ohh vampire diaries that makes sense okay anyway i just liked the picture of snoopie 😴 oh also i still wanna watch vampire diaries cuzz u said it was good BUT I DONT HAVE FLIPPING NETFILIX RIGHT NOW ARGHHH AND I KEEP FORGETTING TO ASK MY SIS THE LOGIN CUZZ IM A DINGLEBERRY and uh yeah now let me look for a fun fact (also im just typing out my thoughts in this para cuzz i dont know alot about the show😶‍🌫️😶‍🌫️) the reason why in many shows and tv they say garlic repels vampires is cuzz garlic has alot of antibactieral properties so it was believed that it also cleaned `unclean spirits`",
    "so okay this is a tulip and well something i always found funny is that u really liked tulips OHYEAH U USED TO CALL ME TULIP THAT WAS ONE OF MY NICKNAMES HIHIHIHI YAAYAYYAY woopsies got excited😴😴(i like that emoji a bit to much) anyways what i always found funny is the fact that in the netherlands (Juul country) we have lots of tulip fields :0 maybe we can go to one together one day (if u want) YIPPIE that seems alot of fun atleast if u want to aswell otherwise it d be kinda akward lol im not gonna lie i might have rushed that sentance a bit hihi anyways iris the tulip fields we have here are so pretty though i do have to say it aint half as pretty as ur eyes are (sorry if compliment make uncomfy tell me if it does cuzz yes thas important)"
    ,"strawberrys okay am gonna do this short and simple but HOLY SHIT U WHERE RIGHT BRO SCHOTISH STRAWBERRYS ARE SO YUMMY LIKE WTF I HAD ONE ON MY WAFFLE WHEN I WAS IN EDIGHNBRUGS FUCK HOW DO I SPELL THAT AGAIN LEMME SEE `Edinburgh` BRO IT WAS LEGIT YUMMIER THEN THE WAFFLE also did u know strawberrys technicly arent beries but u know whats even weirder then that- bananas ARE beries😭😭 MAKE IT MAKE SENSE LOL"
    ,"So here we go AND YES THIS IS WHY I ASKED IF IT WAS STILL UR FAV MOVIE, PRISCILLAA so i still need to watch the movie BUT I CANT CUZZ ITS ONLY ON AMAZON AND IT COSTS MONEY BUT ITS NOT MY ACCOUNT SO I CANT BUY IT AFJASDKLJFLA SFo_o also did u know priscilla appeared in a karate tournament once? she actualy had a blackbelt which is kinda flippin cool."
]
function change(img, text, link, tc) {
    img.setAttribute("src", link)
    text.textContent = tc
}
let jIMGAES = [
 "../images/GINGER.png",
 "../images/sunflower.jpg",
 "../images/eyeball.jpg"
 ,"../images/stitch.jpg"
]

let Jtext = [
    "geus, yup thats right GINGER HAIR (im not joking i still think it looks so cool BRO ITS LITERLY THE BEST HAIR COLOR EVER I COULD LEGIT YAP TO YOU FOR 15 DAYS WHAT I LIKE ABOUT IT O_O    )",
    "ME REALLY LIKE SUNFLOWERS (REMEMBER cozz u my sunflower and they fr my fav flowers)",
    "So for me the favorite part about human anotomy (YES I KNOW THIS SECTION IS A LITTLE WEIRD JUST READ IT AND ULL GET WHERE IM GOING WITH THIS🙏🙏) okay so for me its the eyes and whats funny about that is the reason for eyes is because it allows us to see and i love seeing things and well geuss whats arguably the most important part about the eyes? THATS RIGHT ITS THE IRIS WHICH IS FUNNY CUZZ UR ALSO MY FAV PERSON HHIHIHA"
    ,"so last i like YOU no wait i LOVE you cuzz ur fucking awesome funny sweet and holy fjdklasfjdskfjaslkdfjasklfjasklfjklas jfdHOW DO U EXIST UR SO COOL AND SWEET OMDFJSDKLFSDKL FJKLSDJFKL. also ion care if u find my website dumb or something just know I REALLY TRIED MY BEST I PROMISE (also i put a picture of stitch as elvis cuzz one stitch is a cootie patotie and well ur fav movie is priscillia so why not make it stitch as her ex husband :D)"
    
]


let clicksI = 0
let clicksJ = 0

Ibutton.addEventListener("click", (x) => {
    //code here pretty please
    if (clicksI > 3) {
      clicksI = 0
      change(Iimg, Ipara, IIMAGES[clicksI], IMESSGS[clicksI])
    } else {
    clicksI++; 
    change(Iimg, Ipara, IIMAGES[clicksI], IMESSGS[clicksI])}
}) 



jbutton.addEventListener("click", (x) => {
    //code here pretty please
    if (clicksJ > 2) {
      clicksJ = 0
      change(Jimg, Jpara, jIMGAES[clicksJ], Jtext[clicksJ])
    } else {
    clicksJ++; 
    change(Jimg, Jpara, jIMGAES[clicksJ], Jtext[clicksJ])}
}) 