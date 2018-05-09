let vm = new Vue({
	el:'#app',
	created() {
		if(localStorage.item) {
			this.list = JSON.parse(localStorage.item);
			this.id = this.list[this.list.length-1].id;
		};
		//监控hash值的变化 
		this.hash = window.location.hash.slice(2) || 'all';
		window.addEventListener('hashchange',()=>{
			this.hash = window.location.hash.slice(2) || 'all';
		},false)
	},
	data:{
		list:[],
		title:'',
		cur:'',
		hash:'',
		id:0
	},
	methods:{
		add(){
			
			this.id++;
			this.list.unshift({
				isChecked:false,title:this.title,id:this.id
			});
			this.title = '';
		},
		del(data) {
			this.list = this.list.filter(item=>item.id!=data.id);
		},
		remember(data) {
			this.cur = data;
		},
		cancel() {
			this.cur = '';
		}
	},
	computed:{
		filterList() {
			if(this.hash === 'finish') return this.list.filter(item=>item.isChecked);
			if(this.hash === 'unfinish') return this.list.filter(item=>!item.isChecked);
			return this.list
		},
		count() {
			return this.list.filter(item=>!item.isChecked).length;
		}
	},
	directives:{
		focus(el,bindings) {
			if(bindings.value) {
				el.focus(); //获取焦点
			}
		}
	},
	watch:{//默认只监控一层的数据变化，深度监控
		list:{
			handler() {
				localStorage.setItem('item',JSON.stringify(this.list))
			},
			deep:true
		}
	},
})